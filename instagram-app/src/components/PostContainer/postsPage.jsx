import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './postcontainer';
import SearchBar from '../SearchBar/searchbar'
import {App, MainCont, MainSec} from '../styledComponents/styledComponents';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
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
    this.state.data.forEach((item, i) => { if (item.timestamp === y) return index = i })
    this.setState({ [this.state.data[index]]: newObj[0] })
  }


  //======== likes ===========
likeable = (timestamp, bool) => {
  let index;
  let newObj = this.state.data.filter(item => item.timestamp === timestamp);
  !bool ? newObj=this.inc(newObj) : newObj=this.dec(newObj)
  this.state.data.forEach((item, i) => { if (item.timestamp === timestamp) return index = i })
  this.setState({ [this.state.data[index]]: newObj[0] })
}

  inc = obj => {
    return (obj[0].likes = obj[0].likes + 1);
  }
  dec = obj => {
    return (obj[0].likes = obj[0].likes - 1);
  }

  render() {
    return (
      <App>
        <SearchBar search={this.search} data={this.state.data} />
        <MainCont>
          <MainSec>
            {this.state.data.map((data, i) =>
              <PostContainer likeable={this.likeable} submitComment={this.submitComment} key={data.timestamp} id={data.timestamp} data={data} />)}
          </MainSec>
        </MainCont>
      </App>
    );
  }
}

export default PostsPage;
