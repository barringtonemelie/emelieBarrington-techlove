interface ErrorCardPropsInterface { 
    errorMessage: string;
}

export default function ErrorCard({ errorMessage }: ErrorCardPropsInterface) {
  return (
    <div className="w-full min-w-fit font-primary p-5 m-10 flex flex-col items-center drop-shadow-primary bg-white rounded-lg text-center">
      <h1 className="text-4xl text-decline m-5 text-center">Oops!</h1>
      <p className="w-4/6 m-10 text-center">
        An error has occured. The page you are looking for is not available
        right now. Please try again later!
      </p>
      <i className="m-3 text-decline text-center">{errorMessage}</i>
    </div>
  );
}
