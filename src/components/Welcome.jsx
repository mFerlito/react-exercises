
import React from "react";


export class Welcome extends React.Component {
    render () {
        return <div>
        <h2>Welcome,  {this.props.name ?? 'Marco'}</h2>
        <p>Your Age is {this.props.age}</p>
</div>
    }
}