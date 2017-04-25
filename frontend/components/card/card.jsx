import React from 'react';
import { Link } from 'react-router';

class Card extends React.Component {

  constructor(props){
    super(props);
  }


  render () {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>{`............these are cards for deck #${this.props.params.deckId} `}</div>
      </div>
    )
  }
}

export default Card;
