import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';
import StudyCard from './study_card';

class Study extends React.Component {

  constructor(props){
    super(props);
    this.state={cardIdx: 0, cardView: "question"}
    this.renderStudyCard = this.renderStudyCard.bind(this);
    this.nextRandomCardIdx = this.nextRandomCardIdx.bind(this);
    this.switchCardView = this.switchCardView.bind(this);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(()=>this.nextRandomCardIdx());
  }

  renderStudyCard() {
    if (this.props.cards.length >= 1){
      if(this.state.cardView === "question"){
        return (
          <div className="study-card-container" onClick={this.switchCardView}>
            <h1>This is a card</h1>
            <h1>{this.props.cards[this.state.cardIdx].question}</h1>
          </div>
        )
      }else{
        return(
          <div className="study-card-container" onClick={this.switchCardView}>
            <h1>This is a card</h1>
            <h1>{this.props.cards[this.state.cardIdx].answer}</h1>
          </div>
        )
      }
    }
  }

  nextRandomCardIdx(){
    let Idx = Math.floor(Math.random() * this.props.cards.length)
    while (Idx === this.state.cardIdx){
      Idx = Math.floor(Math.random() * this.props.cards.length)
    }
    this.setState({cardIdx: Idx, cardView: "question"})
  }

  switchCardView(){
    if(this.state.cardView === "question"){
      this.setState({cardView: "answer"})
    }else{
      this.setState({cardView: "question"})
    }
  }

  renderFeedbackBar(){
    if(this.state.cardView === "question"){
      return (
        <div className="study-card-feedback" onClick={this.switchCardView}>
          <h1>Reveal Card</h1>
        </div>
      )
    }else{
      return(
        <div className="study-card-feedback" onClick={this.nextRandomCardIdx}>
          <h1>Give score, show next card</h1>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="study-container group">
        <div className="study-header">header</div>
        <div className="study-progress">progress</div>
        <div className="study-flash">
          {this.renderStudyCard()}
          {this.renderFeedbackBar()}
        </div>
      </div>
    )
  }
}

export default Study;
