import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.searchForm = this.searchForm.bind(this);
  }

  update(){
    return e => this.setState({ query: e.currentTarget.value });
  }

  searchForm(){
    return(
      <form>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        <input type="text"
               placeholder="e.g. math, english"
               value={this.state.query}
               onChange={this.update()}
        ></input>
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

export default SearchBar;
