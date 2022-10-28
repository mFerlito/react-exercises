export function Sum({numbers=[1,2,3,4,5,6]}){

    
    return(
        <div>
            <h1>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number, 0)}</h1>
        </div>
    )
}