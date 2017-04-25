import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", subject_id: this.props.currentSubjectId};
    this.createDeck = this.createDeck.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.currentSubject = this.currentSubject.bind(this);
  }

  componentDidMount(){
    if (this.props.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.currentSubjectId != prevProps.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  deckForm(){
    if (this.props.currentSubjectId) {
      return (
        <li className="deck-form">
          New Deck
          <form onSubmit={this.createDeck}>
            <input placeholder=" e.g. Chapter 1"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
            <input type="submit" value="Save"/>
          </form>
        </li>
      )
    }
  }

  createDeck(){
    this.setState({subject_id: this.props.currentSubjectId}, () => {
      this.props.createDeck(this.state)
      .then(()=>this.setState({name: ""}))
    })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  currentSubject(){
    if (this.props.subject) {
      return <h3>{`Study ${this.props.subject.name}`}</h3>
    } else {
      return <h3>Pick a Subject to Study!</h3>
    }
  }

  deleteDeck(deck){
    this.props.deleteDeck(deck).then(()=>this.props.fetchDecks(this.props.currentSubjectId))
  }

  render () {
    return(
      <div className="deck-container">
        <div className="deck-header">
          {this.currentSubject()}
          <h4>Decks</h4>
        </div>
        <ul className="deck-list">
          {
            this.props.decks.map( deck => (
              <li key={deck.id} className="deck-item">
                <h4>{deck.name}</h4>
                <button onClick={() => this.deleteDeck(deck)}>delete</button>
              </li>
            ))
          }
          {this.deckForm()}
        </ul>
      </div>
    )
  }
}

export default Deck;
