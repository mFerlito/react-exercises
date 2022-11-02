import { useEffect, React, useState } from "react"
export function GithubUser({ username }) {
    const [data, setData] = useState()
  

    async function fetchGithubUser(username) {
    

        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()

        setData(json)

}


    useEffect(() => {
fetchGithubUser(username)
    }, [username])

    console.log(data)


    return (
        <div>

            
            
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.bio}</h2>}
            
        </div>)
}