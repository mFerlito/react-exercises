import { useState, useCallback } from "react";

export function useCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement(){
        setCounter((number) => number + 1 )
    },[])

    const handleCounterDecrement = useCallback(function handleCounterDecrement(){
        setCounter((number) => number - 1 )
    },[])

    const handleCounterReset = useCallback(function handleCounterReset(){
        setCounter(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}
export function UseCounter ({intialValue = 0}) {

    const  {counter, onIncrement, onDecrement, onReset } = useCounter(intialValue) 

    
    return (
    <div>
        <h2>Counter: {counter} </h2>
        <button onClick={onIncrement} >Increment</button>
        <button onClick={onDecrement} >Decrement</button>
        <button onClick={onReset} >Reset</button>
    </div>
    )
}