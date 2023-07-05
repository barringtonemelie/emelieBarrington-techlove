import { Button, RepoCard, ErrorCard } from "../index";
import { useState, useEffect } from "react";
import db from "../../db/fake-db";

interface RepoDataInterface {
    fullName: string;
    description: string;
    watchers: number;
    stargazersCount: number;
    homepage: string;
}

const exampleData: RepoDataInterface = {
    fullName: '',
    description: '',
    watchers: 0,
    stargazersCount: 0,
    homepage: ''
}

export default function Homepage() { 
    const [index, setIndex] = useState<number>(0);
    const [isPrevInactive, setIsPrevInactive] = useState<boolean>(true);
    const [isNextInactive, setIsNextInactive] = useState<boolean>(false);
    const [repoData, setRepoData] = useState<RepoDataInterface>(exampleData);
    const [error, setError] = useState<Error | null>(null);
    const [url, setUrl] = useState<string>(db[index]);

    const getRepo = async () => { 
        try {
            const response = await fetch(`https://api.github.com/repos/${url}`);
            
            if (!response.ok) {
              throw new Error('Request failed with status ' + response.status);
            }
            const data = await response.json();

            setError(null);

            return data;

        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Error fetching repository data: ' + error.message);
              }
            throw new Error('Unknown error occurred');
        }
    }

    useEffect(() => {
        setUrl(db[index]);

        if (index === 0 ) {
            setIsPrevInactive(true);
        }   
        else if (index > 0 && index < db.length - 1) {
            setIsPrevInactive(false);
            setIsNextInactive(false);
        }
        else if (index === db.length - 1) {
            setIsNextInactive(true);
        }

        
    }, [index]);

    useEffect(() => {
        getRepo()
            .then(data => {
                const necessaryData: RepoDataInterface = {
                    fullName: data.full_name,
                    description: data.description,
                    watchers: data.watchers,
                    stargazersCount: data.stargazers_count,
                    homepage: data.homepage
                }

                setRepoData(necessaryData);
            })
            .catch(error => {                
                setError(error);
            });
     }, [url]);

    const prevRepo = () => {
        if (index === 0) {
            return;
        }
        
        setIndex(index - 1);
        
    };

    const nextRepo = () => {
        if (index === db.length - 1) {
            return;
        }

        const newIndex = index + 1; 
        setIndex(newIndex);
        

        if (newIndex === db.length - 1) {
            setIsNextInactive(true);
        } else {
            setIsNextInactive(false);
        }
        
    };


    return (
      <div className="max-w-4xl w-3/5 mx-auto flex flex-col items-center justify-center flex-wrap lg:flex-row">
        <Button
          innerText="Previous"
          isInactive={isPrevInactive}
          onClick={prevRepo}
        />
        <p className="text-2xl py-2.5 m-5">
          {index + 1} / {db.length}
        </p>
        <Button
          innerText="Next"
          isInactive={isNextInactive}
          onClick={nextRepo}
        />

        {error ? (
          <ErrorCard errorMessage={error.message} />
        ) : (
          <RepoCard
            fullName={repoData.fullName}
            description={repoData.description}
            watchers={repoData.watchers}
            stargazersCount={repoData.stargazersCount}
            homepage={repoData.homepage}
          />
        )}
            
      </div>
    );
 }