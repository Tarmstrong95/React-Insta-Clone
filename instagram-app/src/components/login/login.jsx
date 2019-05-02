import React from 'react';
import { LoginForm, Search, FormMainButton } 
    from '../styledComponents/styledComponents';

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
            <LoginForm onSubmit={this.login}>
                <Search 
                name="username" 
                onChange={this.handleChange} 
                placeholder="Username" 
                value={this.state.username} 
                required 
                />
                <Search 
                name="password" 
                onChange={this.handleChange} 
                placeholder="Password" 
                value={this.state.password} 
                required 
                />
                <button>Login</button>
            </LoginForm>

        )
    }

}

export default Login;