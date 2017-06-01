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
        <i className="fa fa-lightbulb-o fa-lg" aria-hidden="true"></i>
        {HINTS[this.randId()]}
      </div>
    );
  }

}

export default CurrentLearners;
