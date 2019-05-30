import React from 'react';
import PostsPage from './components/PostContainer/postsPage'
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/login/login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends React.Component {

  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
      
    );
  }
}

export default App;
