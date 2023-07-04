interface ButtonPropsInterface { 
    innerText: string;
    isInactive: boolean;
    onClick: () => void;
}


export default function Button({ innerText, isInactive, onClick }: ButtonPropsInterface) {

    if (isInactive)
      return (
        <button className="m-5 font-primary bg-inactive text-white text-2xl py-2.5 px-10 rounded-full mb-6 drop-shadow-primary w-[280px] pointer-events-none">
          {innerText}
        </button>
      );
    else
      return (
        <button
          onClick={onClick}
          className="m-5 font-primary bg-primary text-white text-2xl py-2.5 px-10 rounded-full mb-6 drop-shadow-primary hover:transition-all ease-in-out duration-300 hover:drop-shadow-hover active:bg-secondary active:drop-shadow-primary w-[280px]"
        >
          {innerText}
        </button>
      );
  }
  
  
  