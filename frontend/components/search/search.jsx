import React from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';

class Search extends React.Component {

  componentWillMount(){
    this.props.clearSubjects()
    this.state = {renderSpinner: false}
    this.renderSpinner = this.renderSpinner.bind(this);
  }

  componentWillUpdate(){
    if (this.state.renderSpinner){
      this.setState({renderSpinner: false})
    }
  }

  renderSpinner(){
    this.setState({renderSpinner: true})
  }

  render() {
    return(
      <div className="search">
        <SearchBar searchSubjects={this.props.searchSubjects}
                   renderSpinner={this.renderSpinner}/>
        <SearchResults subjects={this.props.subjects}
                       createSubscriber={this.props.createSubscriber}
                       renderSpinner={this.state.renderSpinner}
                       removeSubscription={this.props.removeSubscription}/>
      </div>
    )
  }
}

export default Search;
