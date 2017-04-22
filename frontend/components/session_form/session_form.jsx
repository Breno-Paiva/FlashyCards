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

  componentWillReceiveProps() {
    // debugger
    if (this.props.errors[0]) this.props.clearErrors()
  }
  // componentDidUpdate() {
  //   // debugger
  //   if (this.props.errors[0]) this.props.clearErrors()
  // }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // demoUserSubmit(e){
  //   e.preventDefault();
  //   this.props.login({username: "flashy", password: "friskyb"});
  //   this.setState({ username: "", password: "" });
  // }

  demoUserSubmit(){
    if(this.state.formType="login"){
      return (
        <input type="submit"
          id="demo-user"
          onClick={() => this.setState({username: "flashy", password: "friskyb"})}
          value="DEMO" />
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.setState({ username: "", password: "" });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="session-form-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
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
        <h4>{this.props.formType}</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input placeholder=" username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
          <br/>
          <input placeholder="  password"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          <br/>
          <input  type="submit" value={`${this.props.formType}`} />
          {this.demoUserSubmit()}
          <br/>
        </form>
        {this.navLink()}
      </div>
    );
  }

}

export default withRouter(SessionForm);
