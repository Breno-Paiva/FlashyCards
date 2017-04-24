import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", subject_id: this.props.currentSubjectId};
    this.createDeck = this.createDeck.bind(this);
    this.currentSubject = this.currentSubject.bind(this);
  }

  componentWillMount(){
    if (this.props.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }
  //
  componentDidUpdate(prevProps){
    if (this.props.currentSubjectId != prevProps.currentSubjectId) {
      this.props.fetchDecks(this.props.currentSubjectId)
    }
  }

  deckForm(){
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

  createDeck(){
    this.props.createDeck(this.state)
    this.setState({name: ""})
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  currentSubject(){
    // if (this.subjectName) {
    //   return <h3>{this.subjectName}</h3>
    // } else {
    //   return <h3>Pick a Subject!</h3>
    // }
  }
  render () {
    return(
      <div className="deck-container">
        <div className="deck-header">
          <h3>{`Subject ${this.props.currentSubjectId}`}</h3>
          <h4>Decks</h4>
        </div>
        <ul className="deck-list">
          {
            this.props.decks.map( deck => (
              <li key={deck.id} className="deck-item">
                <h4>{deck.name}</h4>
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
