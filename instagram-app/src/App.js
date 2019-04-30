import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer';
import SearchBar from './components/SearchBar/searchbar'

function App() {
  return (
    <section className="App">

      <SearchBar />

      <main className="main-cont">
      <section className="main-sec">
        {dummyData.map(data => <PostContainer data={data} />)}
      </section>
        
      </main>


    </section>
  );
}

export default App;
