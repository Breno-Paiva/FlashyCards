import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componenetDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

renderErrors() {
  return (
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

  render() {
    return(
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.formType}</h3>
          <label>username:
            <input type="text" value={this.state.username} onChange={this.update("username")} />
          </label>
          <br/>
          <label>password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <br/>
          <input type="submit" value={`${this.props.formType}!`} />
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
