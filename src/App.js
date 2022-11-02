import React from 'react'

import { GithubUserList } from './components/GitHubUserList'

import { Welcome } from './components/Welcome'
import { UseCounter } from './components/UseCounter' 
import { LoginForm } from './components/LoginForm' 
import { GithubUser } from "./components/GithubUser";






export class App extends React.Component {
    render() {
        return <div>


            <Welcome />
            <GithubUser username="mFerlito" /> 
            <GithubUserList/>
            

         
        </div>

    }
}