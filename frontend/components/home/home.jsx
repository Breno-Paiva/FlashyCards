import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="home-container">
        <img src="https://static.pexels.com/photos/7095/people-coffee-notes-tea.jpg" alt="relative homepage"/>
      </div>
    );
  }

}


// conditional in renderForm div checking state for sessionformtype
// {renderForm()} in div

export default withRouter(Home);
