import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
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
    this.setState({ username: "", password: "" });
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

  navLink() {
    if (this.props.formType === "login") {
      return <button onClick={this.props.switchFormType}>sign up instead</button>;
    }else{
      return <button onClick={this.props.switchFormType}>login instead</button>;
    }
  }

  render() {
    return(
      <div className={`session-form-container ${this.props.className}`}>
        <form onSubmit={this.handleSubmit}>
          <h4>{this.props.formType}</h4>
          {this.renderErrors()}
          <input placeholder="username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
          <br/>
          <input placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          <br/>
          <input  type="submit" value={`${this.props.formType}!`} />
          <br/>
          {this.navLink()}
        </form>
      </div>
    );
  }

}

// nav link updates based on state.session.formType

export default withRouter(SessionForm);
