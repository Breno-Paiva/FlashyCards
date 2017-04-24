import React from 'react';
import { Link, withRouter } from 'react-router';
import Subject from '../subject/subject_container';
import Deck from '../deck/deck_container';
import CurrentLearners from '../current_learners/current_learners_container';

class Library extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="library-container group">
        <Subject />
        <div className="main-content">
          <Deck currentSubjectId={this.props.currentSubjectId} />
          <CurrentLearners />
        </div>
      </div>
    );
  }

}

export default withRouter(Library);
