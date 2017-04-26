import React from 'react';
import { Link, hashHistory } from 'react-router';
import update from 'immutability-helper';

class Study extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
  }

  render () {
    return (
      <div className="study-container">
        let's study
        <ul>
          {
            this.props.cards.map(card=>(
              <li>
                {card.score}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Study;
