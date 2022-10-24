import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }
 
    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }
    handleResetState = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }
  

    handlePasswordChange = (event) => {
        const value = event.target.value

        this.setState({
            password: value
        })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked
        

        this.setState({
            [name]: checked,
        })
    }
    render() {
        return <div>
            <h1>My Form</h1>
        
            <div>


                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Username"
                    />
                    
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}

                />
                <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleCheckboxChange} />
            </div>

        </div>
    }
}