import React from "react";
import './index.css'

export class Container extends React.Component{
    render(){
        return(
            <div className="container">
                {this.props.children}
                <h1>This is an Heading that shows Cointainer effects</h1>  
            </div>
        )
    }
}