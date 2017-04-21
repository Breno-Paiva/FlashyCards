import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="home-container">
        <div className="home-description">
          <h2>Explore Flashy Cards</h2>
          <h3>the classy way to study</h3>
        </div>
      </div>
    );
  }

}

export default withRouter(Home);
