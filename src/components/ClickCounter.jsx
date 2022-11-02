import { useEffect, useState, React } from "react";



export function ClickCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterDecrement() {
        setCounter(c => c - 1)
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }
    function onCounterChange(value) {
        console.log(value);
    }
    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }
    useEffect(()=>{
        onCounterChange(counter)
    },[counter])
    

    return (
        <div>

            <h3>Count: {counter}</h3>
            <button onClick={handleCounterIncrement}>Click to increment</button>
            <button onClick={handleCounterDecrement}>Click to decrement</button>
            <button onClick={handleCounterReset}>Click to Reset</button> 
        </div>
    )

}