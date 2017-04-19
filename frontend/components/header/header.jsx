import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionForm from '../session_form/session_form_container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { formType: 'login', formClass: "formOff"};
  }

  sessionForm() {
    return( <SessionForm
      className={this.state.formClass}
      formType={this.state.formType}
      switchForm={this.switchForm} />
    );
  }

  switchForm() {
    let nextForm = this.state.formClass === "formOff" ? "formOn" : "formOff";
    this.setState({formClass: nextForm});
  }


  setFormLogin() {
    this.switchForm();
    this.setState({ formType: "login" });
  }

  setFormSignup() {
    this.switchForm();
    this.setState({ formType: "login" });
  }

  userGreet () {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>{`hey ${this.props.currentUser.username}`}</h3>
          <button onClick={this.props.logout}>LOGOUT</button>
        </div>
      );
    }else{
      return(
        <div>
          <button onClick={this.setFormLogin}>Login</button>
          <br/>
          <button onClick={this.setFormSignup}>Signup</button>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="header-component">
        <h3>Dis be da header</h3>
        { this.userGreet()}
        {this.sessionForm()}
      </div>
    );
  }

}

export default Header;
