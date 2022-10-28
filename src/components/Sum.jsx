export function Sum({numbers}){

    
    return(
        <div>
            <h1>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number, 0)}</h1>
        </div>
    )
}