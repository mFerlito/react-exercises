import React from 'react'
import { Counter } from './components/Counter'


export class App extends React.Component {
    render() {
        return <div>
            
            <Counter initialValue={0} incrementInterval={1000} incrementAmount ={1}/>
        </div>

    }
}