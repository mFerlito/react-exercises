
import React from "react";
import './index.css';
import { Age } from "./Age";


export class Welcome extends React.Component {
    render () {
        return <div className="welcome">
        <h2>Welcome, {this.props.name ?? 'Marco'}</h2>
        {/*  {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" && <Age age={this.props.age}  />} */}
</div>
    }
}
