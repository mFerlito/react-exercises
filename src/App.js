import React from 'react'
import { DisplayLanguage } from './components/DisplayLanguage'
import { Welcome } from './components/Welcome'
import { Sum } from './components/Sum'





export class App extends React.Component {
    render() {
        return <div>


            <Welcome />  
            <Sum />

        </div>

    }
}