import React from "react";
import { Route, Routes } from "react-router-dom"
import { Welcome } from "./components/Welcome";

import { ShowGithubUser } from "./components/ShowGithubUser";

export function App() {

    return (
        <Routes>
         
            
            <Route path="/user/:username" element={<ShowGithubUser />} />
        </Routes>
    )

}