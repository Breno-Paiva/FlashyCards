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
              <li id="question-list">question</li>
              <li id="answer-list">answer</li>
              <li>x</li>
            </ul>
        </div>

        <div className="card-list">
          <ol>
            <li>
              <h4 id="question-item">first question</h4>
              <h4 id="answer-item">first answer</h4>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <h4 id="question-item">second question</h4>
              <h4 id="answer-item">second answer</h4>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <h4 id="question-item">third question</h4>
              <h4 id="answer-item">third answer</h4>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <h4 id="question-item">fourth question</h4>
              <h4 id="answer-item">fourth answer</h4>
              <h4 id="x-card-item">x</h4>
            </li>
            <li>
              <h4 id="question-item">fifth question</h4>
              <h4 id="answer-item">fifth answer</h4>
              <h4 id="x-card-item">x</h4>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Card;
