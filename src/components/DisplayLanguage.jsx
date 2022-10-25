import React from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
    english: {
        CURRENT_LANGUAGE: "The current language is: "
    },
    italiano: {
        CURRENT_LANGUAGE: "La lingua selezionata è: "
    }

}

export class DisplayLanguage extends React.Component {
    state = {
        language: 'english',
        language:'italiano'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
            <div>

                <LanguageContext.Provider value={this.state.language}>

                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value='english'>ENGLISH</option>
                        <option value='italiano'>ITALIANO</option>
                    </select>



                    <LanguageContext.Consumer>
                        {(language) => {
                            return (<h1>{Languages[language].CURRENT_LANGUAGE} {language}</h1>)
                        }}
                    </LanguageContext.Consumer>
                </LanguageContext.Provider>


            </div>
        )
    }
}