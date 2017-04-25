import React from 'react';
import { Link } from 'react-router';

class Card extends React.Component {

  constructor(props){
    super(props);
  }


  render () {
    return (
      <div className="card-container">
        <div className="card-header">
            <h2>{`these are cards for deck #${this.props.params.deckId} `}</h2>
            <ul>
              <li>#</li>
              <li>question</li>
              <li>answer</li>
            </ul>
        </div>

        <div className="card-list">
          <ol>
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
            <li>fifth</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Card;
