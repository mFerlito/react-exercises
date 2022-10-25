import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    state = {
        language: 'en',
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
                        <option value='en'>ENGLISH</option>
                        <option value='it'>ITALIANO</option>
                    </select>

                </LanguageContext.Provider>
            </div>
        )
    }
}