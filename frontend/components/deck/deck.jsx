import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  // renderDecks{
  //   this.props.fetchDecks()
  // }

  render () {
    return(
      <div>
        <h3>{`deck for subject ${this.props.currentSubjectId}`}</h3>
      </div>
    )
  }
}

export default Deck;
