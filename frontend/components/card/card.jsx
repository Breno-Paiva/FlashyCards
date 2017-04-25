import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'react-addons-update';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.state={existingCards: {}, cardsToUpdate: {}, cardsToDelete: {}, cardsToCreate: {1: {question: "new question", answer: "new answer", deck_id: `${this.props.params.deckId}`}} };
    this.renderCardsToUpdate = this.renderCardsToUpdate.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(() => this.setState({existingCards: this.props.cardObjects, cardsToUpdate: this.props.cardObjects}))
  }

  renderCardsToUpdate(card){
    if (this.state.cardsToUpdate[card.id]) {
      return(
        <li key={card.id}>
          <textarea id="question-item"
            value={this.state.cardsToUpdate[card.id].question}
            onChange={this.update("question", card.id)}
            ></textarea>
          <textarea id="answer-item"
            value={this.state.cardsToUpdate[card.id].answer}
            onChange={this.update("answer", card.id)}
            ></textarea>
          <div id="x-card-item">
            <button
              onClick={this.remove(card.id)}
              >x</button>
          </div>
        </li>
      )}
  }

  update(field, id) {
    return e => {
      var newState = update(this.state, {
        cardsToUpdate: {
          [id]: {
            [field]: {
              $set: e.currentTarget.value
            }
          }
        }
      });
      this.setState(newState);
    }
  }

  remove(id) {
    return e => {
      var newState = update(this.state, { cardsToUpdate: { [id]: { $set: null } }, cardsToDelete: {[id]: {$set: id}} });
      this.setState(newState);
    }
  }


  resetForm(){
    this.props.fetchCards(this.props.params.deckId)
    .then(() => this.setState({existingCards: this.props.cardObjects, cardsToUpdate: this.props.cardObjects}))
  }

  renderNewCards(newCard){
    return (
      <li>
        <textarea id="question-item"
          value={newCard.question}
          ></textarea>
        <textarea id="answer-item"
          value={newCard.answer}
          ></textarea>
        <div id="x-card-item">
          <button
            >x</button>
        </div>
      </li>
    )
  }

  saveCards(){
    for (var key in this.state.cardsToDelete) {
      if (this.state.cardsToDelete.hasOwnProperty(key)) {
        this.props.deleteCard(key);
      }
    }

    for (var key in this.state.cardsToUpdate) {
      if (this.state.cardsToUpdate.hasOwnProperty(key)) {
        this.props.updateCard(this.state.cardsToUpdate[key]);
      }
    }

    for (var key in this.state.cardsToCreate) {
      if (this.state.cardsToCreate.hasOwnProperty(key)) {
        this.props.createCard(this.state.cardsToCreate[key]);
      }
    }

  }

  render () {

    return (
      <div className="card-container">
        <div className="card-header">
            <h2>{`These are cards for deck #${this.props.params.deckId} `}</h2>
            <ul>
              <li>#</li>
              <li id="question-list">Question</li>
              <li id="answer-list">Answer</li>
              <li>x</li>
            </ul>
        </div>

        <div className="card-list">
          <ol>
            { this.props.cards.map(card => this.renderCardsToUpdate(card)) }
          </ol>
          <div className="card-buttons group">
            <button onClick={()=>this.resetForm()}>Reset</button>
            <button
              onClick={()=>this.saveCards()}>Save this Deck</button>
            <button>New Card</button>
            <button>Start studying</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;



// { this.state.cardsToCreate.map(newCard => this.renderNewCards(newCard)) }
