import React from 'react';
import { Link } from 'react-router';

class Deck extends React.Component {

  render () {
    return(
      <div>{`deck for subject ${this.props.currentSubjectId}`}</div>
    )
  }
}

export default Deck;
