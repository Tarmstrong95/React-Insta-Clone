import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer';
import SearchBar from './components/SearchBar/searchbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [], 
      filteredData: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData, filteredData: dummyData })
  }

  search=(e)=>{
  
    this.setState({
      data: this.state.filteredData.filter(item => {
        return item.username.includes(e.target.value)
      })
    })
  }

  render() {
    return (
      <section className="App">

        <SearchBar search={this.search} data={this.state.data}/>

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
