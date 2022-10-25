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
            names: [...this.state.names, this.state.valueInput]
            // attraverso lo spread operator evito che una volta aggiunto un elemento 
            // alla lista, l'array venga compresso in un li
        })
    }
    handlerReset = () => {
        this.setState({
            names: []
        })
    }

    render() {
        return (
            <div>
                 {this.props.render(this.state.names)}

                <input type="text"
                    name="username"
                    placeholder="Insert name"
                    onChange={this.handlerInputChange}
                    value={this.state.valueInput}
                />

                <button onClick={this.handlerAddName}>Add name</button>
                <button onClick={this.handlerReset}>Reset list</button>

            </div>
        )
    }
}