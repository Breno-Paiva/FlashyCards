import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

  renderForm() {}

  render() {
    return(
      <div className="home-container">
        <h3>dis be da home page</h3>
      </div>
    );
  }

}


// conditional in renderForm div checking state for sessionformtype
// {renderForm()} in div

export default withRouter(Home);