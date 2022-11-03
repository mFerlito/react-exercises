import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'


export function App (){
    return(
      <div>
        <Routes>
          
          <Route path='/' element={<Counter />} />
        </Routes>
      </div>
    )
}