import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="home-container">
        <h3>dis be da home</h3>
      </div>
    );
  }

}

export default withRouter(Home);
