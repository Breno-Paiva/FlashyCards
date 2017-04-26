import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.state={existingCards: {}, cardsToUpdate: {}, cardsToDelete: {}, cardsToCreate: {} };
    this.renderCardsToUpdate = this.renderCardsToUpdate.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.renderCardsToCreate = this.renderCardsToCreate.bind(this);
    this.removeNewCard = this.removeNewCard.bind(this);
    this.newCardId = 0
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.params.deckId)
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
    .then(() => this.setState({existingCards: this.props.cardObjects, cardsToUpdate: this.props.cardObjects, cardsToCreate: {}}))
  }

  renderCardsToCreate(){
    return(
      Object.keys(this.state.cardsToCreate).map((key)=> {
        if (this.state.cardsToCreate[key]) {
          return(
            <li key={`new-${key}`}>
              <textarea id="question-item"
                value={this.state.cardsToCreate[key].question}
                onChange={this.updateNewCard("question", key)}
                ></textarea>
              <textarea id="answer-item"
                value={this.state.cardsToCreate[key].answer}
                onChange={this.updateNewCard("answer", key)}
                ></textarea>
              <div id="x-card-item">
                <button
                  onClick={this.removeNewCard(key)}
                  >x</button>
              </div>
            </li>
          )
        }
      })
    )
  }

  addCard() {
    this.newCardId += 1
      var newState = update(this.state, {
        cardsToCreate: {$merge: {[this.newCardId]: {question: "", answer:"", deck_id: this.props.params.deckId}}  }})
    this.setState(newState);
  }

  removeNewCard(id) {
    return e => {
      var newState = update(this.state, { cardsToCreate: { [id]: { $set: null } } });
      this.setState(newState);
    }
  }

  updateNewCard(field, id) {
    return e => {
      var newState = update(this.state, {
        cardsToCreate: {
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
        this.props.createCard(this.state.cardsToCreate[key])
      }
    }
  }
  //
  // saveCards(){
  //   for (var key in this.state.cardsToDelete) {
  //     if (this.state.cardsToDelete.hasOwnProperty(key)) {
  //       this.props.deleteCard(key);
  //     }
  //   }
  //
  //   for (var key in this.state.cardsToUpdate) {
  //     if (this.state.cardsToUpdate.hasOwnProperty(key)) {
  //       this.props.updateCard(this.state.cardsToUpdate[key]);
  //     }
  //   }
  //
  //   for (var key in this.state.cardsToCreate) {
  //     if (this.state.cardsToCreate.hasOwnProperty(key)) {
  //       this.props.createCard(this.state.cardsToCreate[key])
  //       .then(this.removeNewCard(key));
  //     }
  //   }
  // }

  render () {
    return (
      <div className="card-container">
        <div className="card-header">
            <h2>{`Flashcards in ${this.props.deckName} `}</h2>
            <ul>
              <li>#</li>
              <li id="question-list">Question</li>
              <li id="answer-list">Answer</li>
              <li></li>
            </ul>
        </div>

        <div className="card-list">
          <ol>
            { this.props.cards.map(card => this.renderCardsToUpdate(card)) }
            { this.renderCardsToCreate() }
          </ol>
          <div className="card-buttons">
            <div className="card-buttons-left">
              <button className="new-card-button" onClick={()=>this.addCard()}>+ Add Card</button>
            </div>
            <div className="card-buttons-right">
              <button className="card-reset" onClick={()=>this.resetForm()}>Reset</button>
              <button className="card-save" onClick={()=>this.saveCards()}>Save this Deck</button>
              <button className="card-form-study">Start studying</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
