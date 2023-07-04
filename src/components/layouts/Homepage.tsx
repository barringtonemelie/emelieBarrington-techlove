import { Button, ShowRepo } from "../index";
import { useState, useEffect } from "react";
import db from "../../db/fake-db";

export default function Homepage() { 
    const [index, setIndex] = useState<number>(0);
    const [isPrevInactive, setIsPrevInactive] = useState<boolean>(true);
    const [isNextInactive, setIsNextInactive] = useState<boolean>(false);
    const [url, setUrl] = useState<string>(db[index]);

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

    const prevRepo = () => {
        if (index === 0) {
            return;
        }

        console.log("Hello from prevRepo");
        
        setIndex(index - 1);
        
    };

    const nextRepo = () => {
        if (index === db.length - 1) {
            return;
        }

        console.log("Hello from nextRepo")

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
            <Button innerText="Previous" isInactive={isPrevInactive} onClick={prevRepo} />
            <p className="text-2xl py-2.5 m-5" >{ index + 1 } / { db.length }</p>
            <Button innerText="Next" isInactive={isNextInactive} onClick={nextRepo} />

            <ShowRepo url={url} />

        </div>
    )
 }