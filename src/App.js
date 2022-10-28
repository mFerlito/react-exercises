import React from 'react'
import { DisplayLanguage } from './components/DisplayLanguage'
import { Welcome } from './components/Welcome'
import { Sum } from './components/Sum'





export class App extends React.Component {
    render() {
        return <div>


            <Welcome />  
            <Sum numbers={[1, 2, 3, 4, 5]} />

        </div>

    }
}