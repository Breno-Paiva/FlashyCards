import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';
import StudyCard from './study_card';

class Study extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
  }

  renderStudyCard(card) {
    return (
      <StudyCard card={card} createScore={this.props.createScore} updateScore={this.props.updateScore} />
    )
  }

  render () {
    return (
      <div className="study-container group">
        <div className="study-header">header</div>
        <div className="study-progress">progress</div>
        <div className="study-flash">study</div>
      </div>
    )
  }
}
// <h1>let's study</h1>
// { this.renderStudyCard(this.props.cards[0])}

export default Study;
