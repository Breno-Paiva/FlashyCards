import React from 'react';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.searchSubject = this.searchSubject.bind(this);
  }

  update(){
    return e => this.setState({ query: e.currentTarget.value });
  }

  searchSubject(e){
    e.preventDefault()
    this.props.renderSpinner()
    this.props.searchSubjects(this.state.query)
  }

  searchForm(){
    return(
      <form onSubmit={this.searchSubject}>
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
