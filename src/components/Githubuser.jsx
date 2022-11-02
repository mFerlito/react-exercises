import { UseGithubUser } from "./UseGithubUser"

export function GithubUser({ username }) {

    const { data, error, loading } = UseGithubUser(username);
 
    return (
        <div>

            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error!</h1>}
            {data && <h1>{data.name}</h1>}
            {data && <h1>{data.bio}</h1>}

        </div>
    )

}