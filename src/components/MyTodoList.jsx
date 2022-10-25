import React from "react";

export class MyTodoList extends React.Component {
    state = {
        names: ['Andrea', 'Paolo', 'Gabriele', 'Diego', 'Asdrubale', 'Giampiero'],
        valueInput: '',
    }

    handlerInputChange = (event) => {
        this.setState({
            valueInput: event.target.value
        })
    }

    handlerAddName = () => {
        this.setState({
            names: [this.state.valueInput]  
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => <li key={name + index}>{name}</li>)}
                </ul>

                <input type="text"
                       name="username"
                       placeholder="Submit name"
                       onChange={this.handlerInputChange}
                       value={this.state.valueInput}
                       />

                <button onClick={this.handlerAddName}>Add name</button>
            </div>
        )
    }
}