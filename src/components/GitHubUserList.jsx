import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList(){
    const [userArray,setUserArray] = useState([])
    const[inputFieldValue, setInputFieldValue] = useState('')

    function handleInputField(event){
        setInputFieldValue(event.target.value)
    }

    function handleSubmit(){
        setUserArray([...userArray, inputFieldValue])
    }


    return(
        <div>
            {userArray.map((githubName)=> (<div> <GithubUser username={githubName}/> </div> ))}
            <input onChange={handleInputField} name="username"/>
            <button onClick={handleSubmit}>Add Github User</button>
        </div>
    )
}