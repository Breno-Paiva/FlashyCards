import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';
import StudyCard from './study_card';

class Study extends React.Component {

  constructor(props){
    super(props);
    this.state={cardIdx: 0, cardView: "question"}
    this.renderStudyCard = this.renderStudyCard.bind(this);
    this.renderFeedbackBar = this.renderFeedbackBar.bind(this);
    this.nextRandomCardIdx = this.nextRandomCardIdx.bind(this);
    this.switchCardView = this.switchCardView.bind(this);
    this.giveScore = this.giveScore.bind(this);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(()=>this.nextRandomCardIdx());
  }

  renderProgress(){
    return(
      <div>
        <h1>progress</h1>
        {this.scoreAverage()}
        <div className="score-5">{`5--${this.numberof(5)}`}</div>
        <div className="score-4">{`4--${this.numberof(4)}`}</div>
        <div className="score-3">{`3--${this.numberof(3)}`}</div>
        <div className="score-2">{`2--${this.numberof(2)}`}</div>
        <div className="score-1">{`1--${this.numberof(1)}`}</div>
      </div>
    )
  }

  numberof(score){
    var count = 0
    for( var i = 0; i < this.props.scores.length; i++ ){
      if (this.props.scores[i] === score){
        count += 1
      }
    }
    var avg = count/(this.props.scores.length)*100;
    return `${Math.round(avg)}%`
  }

  scoreAverage(){
    var sum = 0;
    for( var i = 0; i < this.props.scores.length; i++ ){
      sum += parseInt( this.props.scores[i]);
    }
    var avg = sum/(this.props.scores.length*5)*100;
    return `${Math.round(avg)}%`
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
    var card = this.props.cards[this.state.cardIdx];
    if(this.state.cardView === "question"){
      return (
        <div className="study-card-reveal feedback" onClick={this.switchCardView}>
          <h1>Reveal Card</h1>
        </div>
      )
    }else{
      return(
        <div className="study-card-answer feedback">
          <button
            className="give-1 give-button"
            onClick={(event)=> {this.nextRandomCardIdx(); this.giveScore(card, 1)}}
            >1</button>
          <br/>
          <button
            className="give-2 give-button"
            onClick={(event)=> {this.nextRandomCardIdx(); this.giveScore(card, 2)}}
            >2</button>
          <br/>
          <button
            className="give-3 give-button"
            onClick={(event)=> {this.nextRandomCardIdx(); this.giveScore(card, 3)}}
            >3</button>
          <br/>
          <button
            className="give-4 give-button"
            onClick={(event)=> {this.nextRandomCardIdx(); this.giveScore(card, 4)}}
            >4</button>
          <br/>
          <button
            className="give-5 give-button"
            onClick={(event)=> {this.nextRandomCardIdx(); this.giveScore(card, 5)}}
            >5</button>
        </div>
      )
    }
  }

  giveScore(card, score){
    if (card.score){
      this.props.updateScore({card_id: card.id, score: score})
    }else{
      this.props.createScore({card_id: card.id, score: score})
    }
  }

  render () {
    return (
      <div className="study-container group">
        <div className="study-header">header</div>
        <div className="study-progress">
          {this.renderProgress()}
        </div>
        <div className="study-flash">
          {this.renderStudyCard()}
          {this.renderFeedbackBar()}
        </div>
      </div>
    )
  }
}

export default Study;
