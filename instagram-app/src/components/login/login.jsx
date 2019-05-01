import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        this.setState({
            username: '',
            password: ''
        })
        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input 
                name="username" 
                onChange={this.handleChange} 
                placeholder="Username" 
                value={this.state.username} 
                required 
                />
                <input 
                name="password" 
                onChange={this.handleChange} 
                placeholder="Password" 
                value={this.state.password} 
                required 
                />
                <button>Login</button>
            </form>

        )
    }

}

export default Login;