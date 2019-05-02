import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './postcontainer';
import SearchBar from '../SearchBar/searchbar'

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      incrimented: false
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData, filteredData: dummyData })
  }

  //====== search =======
  search = (e) => {
    const newArr = this.state.filteredData.filter(item => {
      return item.username.includes(e.target.value)
    })
    this.setState({
      data: newArr
    })
  }

  //========= comments ========
  submitComment = (x, y) => {
    let index;
    let newObj = this.state.data.filter(item => item.timestamp === y)
    newObj[0].comments = [...newObj[0].comments, x]
    this.state.data.forEach((item, i) => {if (item.timestamp === y) return index = i})
    this.setState({[this.state.data[index]]: newObj[0]})
  }


  //======== likes ===========
  

 inc = (timestamp) => {
    let index;
    let newObj = this.state.data.filter(item => item.timestamp === timestamp);
    newObj[0].likes = newObj[0].likes + 1;
    this.state.data.forEach((item, i) => {if (item.timestamp === timestamp) return index = i})
    this.setState({[this.state.data[index]]: newObj[0]})
 }
 dec = (timestamp) => {
  let index;
  let newObj = this.state.data.filter(item => item.timestamp === timestamp);
  newObj[0].likes = newObj[0].likes - 1;
  this.state.data.forEach((item, i) => {if (item.timestamp === timestamp) return index = i})
  this.setState({[this.state.data[index]]: newObj[0]})
 }

  render() {

    return (
      <section className="App">
        <SearchBar search={this.search} data={this.state.data} />
        <main className="main-cont">
          <section className="main-sec">
            {this.state.data.map((data, i) =>
              <PostContainer inc={this.inc} dec={this.dec} submitComment={this.submitComment} key={data.timestamp} id={data.timestamp} data={data} />)}
          </section>
        </main>
      </section>
    );
  }
}

export default PostsPage;
