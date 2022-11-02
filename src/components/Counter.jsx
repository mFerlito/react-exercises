import { useEffect, React, useState } from "react";
import { ClickCounter } from "./ClickCounter";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, intervalCounter = 1000, incrementAmount = 1 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(`mount component`);


        const interval = setInterval(() => {
            setCounter((counter) => {
                return counter + incrementAmount
            })
        }, intervalCounter)

        return () => {
            clearInterval(interval)
            console.log(`unmount component`);
        }
    }, [counter])





    return (
        <div>
            <h1>Counter:{counter}</h1>
        </div>
    )

}