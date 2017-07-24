import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionForm from '../session_form/session_form_container';
import Modal from 'react-modal';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { formType: 'login',
                   formClass: "form-off",
                   logoutModalIsOpen: false};
    this.setFormLogin = this.setFormLogin.bind(this);
    this.setFormSignup = this.setFormSignup.bind(this);
    this.switchFormType = this.switchFormType.bind(this);
    this.switchFormShow = this.switchFormShow.bind(this);
    this.blackOut = this.blackOut.bind(this);
    this.toggleLogout = this.toggleLogout.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  sessionForm() {
    return(
      <SessionForm
      switchFormShow={this.switchFormShow}
      className={this.state.formClass}
      formType={this.state.formType}
      switchFormType={this.switchFormType} />
    );
  }

  switchFormType() {
    let nextFormType = this.state.formType === "login" ? "signup" : "login";
    this.props.clearErrors()
    this.setState({formType: nextFormType});
  }

  switchFormShow() {
    let nextFormShow = this.state.formClass === "form-off" ? "form-on" : "form-off";
    this.props.clearErrors()
    this.setState({formClass: nextFormShow});
  }

  setFormLogin() {
    this.switchFormShow();
    this.setState({ formType: "login" });
  }

  setFormSignup() {
    this.switchFormShow();
    this.setState({ formType: "signup" });
  }

  blackOut () {
    if (this.state.formClass === "form-on") {
      return (<div className="black-out"
        onClick={this.switchFormShow}
      ></div>);
    }
  }

  // <img src={require('../../../app/assets/images/flashy-cards-home.jpg')}></img>
  // Business graphic by <a href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
  leftHeader () {
    return (
      <div className="left-header">
        <div className="logo"></div>
        <Link to="/library">
          <h3>FLASHYcards</h3>
        </Link>
        <Link to="/library">
          <div className="library-header">My Library</div>
        </Link>
        <Link to="/search">
          <div className="search-header"><i className="fa fa-search" aria-hidden="true"></i>Flashcards</div>
        </Link>
      </div>
    )
  }

  rightHeader () {
    return(
      <div className="right-header">
        { this.userInfo()}
      </div>
    )
  }

  userInfo () {
    if (this.props.currentUser) {
      this.state.formClass = "form-off";

      return (
        <div className="user-info">
          {this.renderLogout()}
          <Link to="/library">
            <h3>{`Hi,  ${this.props.currentUser.username}`}</h3>
          </Link>
          <i className="fa fa-chevron-circle-down" aria-hidden="true" onClick={this.toggleLogout}></i>
        </div>
      );
    }else{
      return(
        <div className="session-buttons">
          <button onClick={this.setFormLogin}
            className="login"
          >Login</button>
          <br/>
          <button onClick={this.setFormSignup}
            className="signup"
            >Get Started</button>
          <input type="submit"
            id="demo-user"
            onClick={() => this.setState({username: "flashyUser", password: "friskyb"})}
            value="DEMO" />
        </div>
      );
    }
  }

  toggleLogout(){
    if (this.state.logoutModalIsOpen){
      this.setState({logoutModalIsOpen: false})
    }else{
      this.setState({logoutModalIsOpen: true})
    }
  }

  renderLogout(){
    if (this.state.logoutModalIsOpen){
      return <button className="logout" onClick={this.props.logout} onMouseOut={this.toggleLogout}>LOGOUT</button>
    }
  }

  render() {
    return(
      <div className="header-component">
        <div className="navbar">
          {this.leftHeader()}
          {this.rightHeader()}
        </div>
        <div className="session-form-render">
          {this.sessionForm()}
          {this.blackOut()}
        </div>
      </div>
    );
  }

}

export default Header;
