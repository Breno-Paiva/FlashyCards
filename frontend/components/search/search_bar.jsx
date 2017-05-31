import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {content: ""}
  }

  searchForm(){
    return(
      <form>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        <input type="text"></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }

  render() {
    return(
      <div className="search-bar-container">
        {this.searchForm()}
        <div className="search-pic"></div>
      </div>
    )
  }
}
// <img src="../../../app/assets/images/search_pic.jpeg"></img>

export default SearchBar;
