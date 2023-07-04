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

    const getRepo = async () => { 
        const response = await fetch(`https://api.github.com/repos/${url}`);
        const data = await response.json();
        
        return data; 
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
                console.error('Error:', error);
            });
    }, [url]);

    
    return ( 
        <div>
            <h1>{repoData.fullName}</h1>
            <p>{repoData.description}</p>
            <p>{repoData.watchers}</p>
            <p>{repoData.stargazersCount}</p>
            <a href={repoData.homepage}>{repoData.homepage}</a>
        </div>
    )
}

