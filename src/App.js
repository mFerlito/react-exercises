import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import { Welcome } from "./components/Welcome";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Counter } from './components/Counter';

export function App() {

    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/user">Github User</Link>
            <Routes>
                <Route path="/" element={<Welcome name='Marco' />} />
                <Route path='/counter' element={<Counter />} />
                <Route path="/user/:username" element={<ShowGithubUser /> }/>
            </Routes>
        </div>
    )

}