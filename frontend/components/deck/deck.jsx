import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: "", subject_id: this.props.currentSubjectId};
    this.createDeck = this.createDeck.bind(this);
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
          <input placeholder=" Deck Name"
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            />
          <input type="submit" value="save"/>
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

  render () {
    return(
      <div>
        <h3>{`deck for subject ${this.props.currentSubjectId}`}</h3>
        <ul>
          {
            this.props.decks.map( deck => (
              <li key={deck.id}>
                <h2>{deck.name}</h2>
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
