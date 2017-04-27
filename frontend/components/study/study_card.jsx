import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';

class StudyCard extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="study-card-container" onClick={this.props.nextRandomCardIdx}>
        <h1>This is a card</h1>
        <h1>{this.props.card.question}</h1>
      </div>
    )
  }
}

export default StudyCard;
