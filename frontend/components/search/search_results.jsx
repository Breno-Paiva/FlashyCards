import React from 'react';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(subscribed, subjectId){
    if(subscribed){
      return(<button onClick={() => this.props.createSubscriber(subjectId)}>unsubscribe</button>)
    }else{
      return(<button onClick={() => this.props.createSubscriber(subjectId)}>subscribe</button>)
    }
  }

  render() {

    return(
      <div className="search-results-container">
        <ul className="search-list">
          {
            this.props.subjects.map( subject => (
              <li key={subject.id}>
                <div className="search-item">
                  <div className="left-search-item">
                    <h2>{subject.name}</h2>
                    {this.renderButton(subject.subscribed, subject.id)}
                  </div>
                  <div className="right-search-item">
                    <h2>{subject.deck_count} decks</h2>
                    <h2>-</h2>
                    <h2>{subject.card_count} cards</h2>
                    <h2>-</h2>
                    <h2>{subject.learner_count} learners</h2>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SearchResults;
