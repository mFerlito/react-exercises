import React from 'react'
import { Welcome } from './components/Welcome'
import { Container } from './components/Container'
import { DisplayLanguage } from './components/DisplayLanguage'

export class App extends React.Component {
    render() {
        return <div>
        
            <Container title={'This is an awesome title passed as prop :D'} />
            <DisplayLanguage /> 
            
        </div>

    }
}