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
            <li>
              <textarea id="question-item">first question</textarea>
              <textarea id="answer-item">first answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <textarea id="question-item">first question</textarea>
              <textarea id="answer-item">first answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <textarea id="question-item">second question</textarea>
              <textarea id="answer-item">second answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <textarea id="question-item">third question</textarea>
              <textarea id="answer-item">third answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <textarea id="question-item">fourth question</textarea>
              <textarea id="answer-item">fourth answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <textarea id="question-item">fifth question</textarea>
              <textarea id="answer-item">fifth answer</textarea>
              <h4 id="x-card-item">x</h4>
            </li>
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
