import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <form>
        <label>username:
          <input onChange={this.update("username")} />
        </label>
        <br/>
        <label>password:
          <input onChange={this.update("password")} />
        </label>
      </form>
    );
  }
}

// withRouter
export default SessionForm;
