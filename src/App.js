import React from 'react'
import { Welcome } from './components/Welcome'
import { Sum } from './components/Sum'
import {ClickCounter} from './components/ClickCounter'
import {Login} from './components/Login'





export class App extends React.Component {
    render() {
        return <div>


            <Welcome />  
            <Sum />
            <ClickCounter />
            <Login />

        </div>

    }
}