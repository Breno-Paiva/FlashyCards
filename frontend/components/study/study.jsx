import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';
import StudyCard from './study_card';

class Study extends React.Component {

  constructor(props){
    super(props);
    this.state={cardIdx: 0}
    this.renderStudyCard = this.renderStudyCard.bind(this);
    this.nextRandomCardIdx = this.nextRandomCardIdx.bind(this);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(()=>this.nextRandomCardIdx());
  }

  renderStudyCard() {
    if (this.props.cards.length >= 1){
      return (
        <StudyCard
          card={this.props.cards[this.state.cardIdx]}
          createScore={this.props.createScore}
          updateScore={this.props.updateScore}
          nextRandomCardIdx={this.nextRandomCardIdx}/>
      )
    }
  }

  nextRandomCardIdx(){
    let Idx = Math.floor(Math.random() * this.props.cards.length)
    while (Idx === this.state.cardIdx){
      Idx = Math.floor(Math.random() * this.props.cards.length)
    }
    this.setState({cardIdx: Idx})
  }


  render () {
    return (
      <div className="study-container group">
        <div className="study-header">header</div>
        <div className="study-progress">progress</div>
        <div className="study-flash">
          {this.renderStudyCard()}
          <button onClick={this.nextRandomCardIdx}>next card</button>
        </div>
      </div>
    )
  }
}
// <h1>let's study</h1>
// { this.renderStudyCard(this.props.cards[0])}

export default Study;
