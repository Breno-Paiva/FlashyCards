import React from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Search extends React.Component {
  render() {
    return(
      <div className="search">
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default Search;