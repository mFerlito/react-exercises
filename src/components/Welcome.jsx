
import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {
    render () {
        return <div>
        <h2>Welcome,{this.props.name ?? 'Marco'}</h2>
        {this.props.age && <Age age={this.props.age} />} 
</div>
    }
}
