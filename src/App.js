import React, { useState }  from 'react'
import { DisplayLanguage } from "./components/DisplayLanguage";
import { LanguageContext } from "./components/LanguageContext";
import {CarSelector} from "./components/CarSelector"
import { UseCounter } from "./components/UseCounter";




export function App() {
    const [language, setLanguage] = useState('en')

    function handleSelectLanguage(event) {
        setLanguage(event.target.value)
    }




    return (
        <div className="mainContainer">
            <select value={language} onChange={handleSelectLanguage}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
            </select>
            <LanguageContext.Provider value={language}>
                <CarSelector initialData={{ defaultModel: "Ford Fiesta", defaultYear: 2002, defaultColor: "Grey" }} />
                <DisplayLanguage />
            </LanguageContext.Provider>
            <UseCounter/> 
        </div>
    )

}