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
    this.renderProgress = this.renderProgress.bind(this);
    this.nextRandomCardIdx = this.nextRandomCardIdx.bind(this);
    this.switchCardView = this.switchCardView.bind(this);
    this.giveScore = this.giveScore.bind(this);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(()=>this.nextRandomCardIdx());
  }

  renderProgress(){
    const progressStyle ={
      WebkitTransition: 'all',
      msTransition: 'all',
      background: 'blue',
      width: `${this.numberof(1)}`
    }
    return(
      <div className="study-progress">
        <div className="progress-title">
          <h2 id="studying">Studying:</h2>
          <h2>subject</h2>
        </div>
        <div className="progress-done">done</div>
        <div className="progress-percent">percent</div>
        <div className="progress-mastered">mastered</div>
        {this.renderProgressBars()}
      </div>
    )
  }
  // <div className="test">
  //   <div style={progressStyle}>{`1--${this.numberof(1)}`}</div>
  // </div>

  renderProgressBars(){
    return(
      <div className="progress-bars">
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
            <h1>Q.</h1>
            <h1>{this.props.cards[this.state.cardIdx].question}</h1>
          </div>
        )
      }else{
        return(
          <div className="study-card-container" onClick={this.switchCardView}>
            <h1>A.</h1>
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
        <div className="feedback"
          onClick={this.switchCardView}>
            <h4>&nbsp;</h4>
            <h3 className="study-card-reveal">Reveal Answer</h3>
        </div>
      )
    }else{
      return(
        <div className="feedback">
          <h4>How well did you know this?</h4>
          <div className="study-card-answer">
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
        {this.renderProgress()}
        <div className="study-flash">
          <div className="card">
            <h4>{`${this.state.cardIdx + 1} of ${this.props.cards.length}`}</h4>
            {this.renderStudyCard()}
          </div>
          {this.renderFeedbackBar()}
        </div>
      </div>
    )
  }
}

export default Study;
