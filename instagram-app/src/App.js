import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer';
import SearchBar from './components/SearchBar/searchbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <section className="App">

        <SearchBar />

        <main className="main-cont">
          <section className="main-sec">
            {this.state.data.map((data, i) =>
              <PostContainer key={Date.now + i} data={data}/>)}
          </section>

        </main>


      </section>
    );
  }

}

export default App;
