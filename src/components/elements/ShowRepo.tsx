import { useState, useEffect } from 'react';

interface ShowRepoPropsInterface { 
    url: string;
}

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

export default function ShowRepo({ url }: ShowRepoPropsInterface) {
    const [repoData, setRepoData] = useState<RepoDataInterface>(exampleData);
    const [error, setError] = useState<Error | null>(null);

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
                console.log("From useEffect: ", typeof error);
                
                setError(error);
            });
    }, [url]);

    
    
    if (error) { 
        return (
            <div className='font-primary p-5 m-10 flex flex-col items-center drop-shadow-primary bg-white rounded-lg text-center'>
                <h1 className="text-4xl text-decline m-5 text-center">
                    Oops!
                </h1>
                <p className='w-4/6 m-10 text-center'>
                    An error has occured. The page you are looking for is not available right now. Please try again later!
                </p>
                <i className='m-3 text-decline text-center'>{error.message}</i>
            </div>
        )
    }

    return ( 
        <div className='font-primary p-5 m-10 flex flex-col items-center drop-shadow-primary bg-white rounded-lg text-center'>
            <h1 className="text-4xl text-primary m-5">
                {repoData.fullName}
            </h1>
            <p className='w-4/6 m-3 text-center'>
                {repoData.description}
            </p>
            <p className='w-4/6 m-3 text-center'>
                {repoData.watchers}
            </p>
            <p className='w-4/6 m-3 text-center'>
                {repoData.stargazersCount}
            </p>
            <a href={repoData.homepage} className='w-4/6 m-3 text-center'>{repoData.homepage}</a>
        </div>
    )
}

