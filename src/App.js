import React from 'react'
import { Age } from './components/Age' 
import { Hello } from './components/Hello'
import { Welcome } from './components/Welcome'

export class App extends React.Component {
    render() {
        return <div>
            <Age age={18} /> 
        </div>
        
    }
}