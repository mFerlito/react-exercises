import React from 'react'
import { Age } from './components/Age' 
import {Counter} from './components/Counter'
import { Hello } from './components/Hello'
import { Welcome } from './components/Welcome'

export class App extends React.Component {
    render() {
        return <div>
            <Age /> 
            <Counter /> 
        </div>
        
    }
}