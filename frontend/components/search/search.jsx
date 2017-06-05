import React from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Search extends React.Component {

  componentWillMount(){
    this.props.clearSubjects()
  }

  render() {

    return(
      <div className="search">
        <SearchBar searchSubjects={this.props.searchSubjects}/>
        <SearchResults subjects={this.props.subjects} createSubscriber={this.props.createSubscriber} removeSubscription={this.props.removeSubscription}/>
      </div>
    )
  }
}

export default Search;
