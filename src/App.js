import React from 'react'
import { ClickTracker } from './components/ClickTracker'
import { Counter } from './components/Counter'
import { InteractiveWelcome } from './components/InteractiveWelcome'
import {Login} from './components/Login'
import { MyUncontrolledForm } from './components/MyUncontrolledForm'
import { MyTodoList } from './components/MyTodoList'
import { Welcome } from './components/Welcome'
import { Container } from './components/Container'

export class App extends React.Component {
    render() {
        return <div>
            <InteractiveWelcome /> 
            <Counter initialValue={0} incrementInterval={1000} incrementAmount ={1}/>
            <ClickTracker />
            <Login />
            <MyUncontrolledForm />
            <MyTodoList />
            <Welcome />
            <Container />
        </div>

    }
}