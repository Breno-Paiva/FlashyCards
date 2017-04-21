import React from 'react';
import { Link, withRouter } from 'react-router';
import Subject from '../subject/subject_container';

class Library extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="library-container">
        <h3>dis be da library page</h3>
        <Subject />
      </div>
    );
  }

}

export default withRouter(Library);
