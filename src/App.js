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
            <Welcome />
            <Container title={'This is an awesome title passed as prop :D'} />
            <MyTodoList  render={(names) => {
                return(
                    <div className="container_todoListStyle">
                        <ul className="container_todoListStyle_ul">
                            {names.map((name, index) => <li key={name + index}>{name}
                            <button onClick={() => {names.splice(index, 1);
                            this.setState({ 
                                    names: names });
                                    }}>Remove</button></li>)}
                        </ul>
                    </div>
                )
            }}/> 
        </div>

    }
}