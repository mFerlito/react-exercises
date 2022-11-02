import { useState } from "react"
export function UseCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }
   function handleCounterResetHandler() {
        setCounter(initialValue)
    }

   function handleCounterDecrement() {
        setCounter(c => c - 1)

    }
    return {

        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterResetHandler,
        
}
}
export function Counter ({intialValue = 0}) {

    const  {counter, onIncrement, onDecrement, onReset } = UseCounter(intialValue)

    
    return (
    <div>
        <h2>Counter: {counter} </h2>
        <button onClick={onIncrement} >Increment</button>
        <button onClick={onDecrement} >Decrement</button>
        <button onClick={onReset} >Reset</button>
    </div>
    )
}