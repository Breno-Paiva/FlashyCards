import React from 'react';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.renderSpinner = this.renderSpinner.bind(this)
  }

  renderSpinner(){
    if (this.props.renderSpinner){
      return(
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      )
    }
  }

  renderButton(subscribed, subjectId){
    if(subscribed){
      return(<button className="unsubscribe" onClick={() => this.props.removeSubscription(subjectId)}>unsubscribe</button>)
    }else{
      return(<button className="subscribe" onClick={() => this.props.createSubscriber(subjectId)}>subscribe</button>)
    }
  }

  render() {

    return(
      <div className="search-results-container">
        {this.renderSpinner()}
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
