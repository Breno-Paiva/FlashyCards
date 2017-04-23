import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

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

  // constructor() {
  //   super(props);
  //   this.renderDecks = this.renderDecks.bind(this)
  // }
  //
  // renderDecks() {
  //   this.props.fetchDecks(this.props.currentSubjectId)
  // }



  render () {
    // debugger
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
        </ul>
      </div>
    )
  }
}

export default Deck;
