import React from 'react';
import { Link } from 'react-router';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.state={existingCards: {} }
  }

  componentWillMount(){
    this.props.fetchCards(this.props.params.deckId)
    .then(() => this.setState({existingCards: this.props.cardObjects}))
}

  render () {
    return (
      <div className="card-container">
        <div className="card-header">
            <h2>{`These are cards for deck #${this.props.params.deckId} `}</h2>
            <ul>
              <li>#</li>
              <li id="question-list">Question</li>
              <li id="answer-list">Answer</li>
              <li>x</li>
            </ul>
        </div>

        <div className="card-list">
          <ol>
            {
              this.props.cards.map(card => {
                return(
                  <li>
                    <textarea id="question-item" value={card.question}></textarea>
                    <textarea id="answer-item" value={card.answer}></textarea>
                    <div id="x-card-item">
                      <button>x</button>
                    </div>
                  </li>
                )
              })
            }
          </ol>
          <div className="card-buttons group">
            <button>Reset</button>
            <button>Save this Deck</button>
            <button>Start studying</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
