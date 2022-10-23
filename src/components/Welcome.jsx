
import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {
    render() {
        return <div>
            <h2>Welcome, {this.props.name ?? 'Marco'}</h2>
            {this.props.age >= 18 && <Age age={this.props.age} />}
            

        </div>
    }
}
