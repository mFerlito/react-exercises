
import React from "react";


export class Welcome extends React.Component {
    render () {
        return <div>
        <h2>Welcome, {this.props.name ?? 'Andrea'}</h2>
        <p>Your Age is {this.props.age}</p>
</div>
    }
}