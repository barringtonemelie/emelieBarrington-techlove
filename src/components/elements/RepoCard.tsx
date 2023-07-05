import { BsStar } from 'react-icons/bs';

interface RepoCardPropsInterface {
    fullName: string;
    description: string;
    watchers: number;
    stargazersCount: number;
    homepage: string;
}

export default function RepoCard({
  fullName,
  description,
  watchers,
  stargazersCount,
  homepage,
}: RepoCardPropsInterface) {
  return (
    <div className="w-full min-w-fit font-primary p-5 m-10 flex flex-col items-center drop-shadow-primary bg-white rounded-lg text-center">
      <h1 className="text-4xl font-bold text-primary m-5">{fullName}</h1>
      <p className="w-4/6 m-3 text-center flex flex-col items-center">
        <BsStar />
        {stargazersCount}
      </p>

      <h2 className="text-2xl font-semibold text-center text-primary my-2">
        Description
      </h2>
      <p className="w-4/6 m-3 text-center">{description}</p>

      <h3 className="text-2xl font-semibold text-center text-primary mt-3">
        Watchers:{" "}
      </h3>
      <p className="w-4/6 m-3 text-center">{watchers}</p>
      <a
        href={homepage}
        className="w-4/6 m-3 text-center text-secondary underline"
      >
        {homepage}
      </a>
    </div>
  );
}