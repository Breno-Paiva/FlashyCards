import React from 'react';

const HINTS = [
  "A deck a day keeps the brain awake.",
  "The more you study the better you'll be.",
  "You can do it! Keep up the good work.",
  "It's been proven that flash cards make you smarter.",
  "Need to study a new subject? Just create some decks!"
]

class CurrentLearners extends React.Component {

  randId(){
    return Math.floor(Math.random()*HINTS.length);
  }

  render() {
    return(
      <div className="current-learners-container">
        <h2>Current Learners ( {this.props.subscribers.length} )</h2>
        <ul className="subscribers-list">
          {
            this.props.subscribers.map( subscriber => (
              <li key={subscriber.id}>
                <div className="subscriber-item">
                  <h3>{subscriber.username}</h3>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

}

export default CurrentLearners;
