import React from 'react';

const withAuthenticate = PostPage => LoginPage =>
class extends React.Component {
    state = {
        loggedIn: false
    }
    componentDidMount(){
        localStorage.getItem('username')?
        this.setState({loggedIn: true}):
        this.setState({loggedIn: false})
    }
    render(){
        console.log(this.state)
           if(!this.state.loggedIn){
               return <LoginPage />
           }else {
               return <PostPage />
           }
    }
}

export default withAuthenticate;