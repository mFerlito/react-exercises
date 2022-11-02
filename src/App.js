import React from 'react'
import { CarSelector } from './components/CarSelector'





export class App extends React.Component {
    render() {
        return <div>


        <CarSelector initialData={{defaultModel: "Ford Fiesta", defaultYear: 2002, defaultColor: "Grey"}}/>
            

         
        </div>

    }
}