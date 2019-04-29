import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'

function App() {
  return (
    <div className="App">
      {dummyData.map(data => <PostContainer data={data}/>)}
    </div>
  );
}

export default App;
