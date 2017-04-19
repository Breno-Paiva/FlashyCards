import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { username: "", password: "" };
  }

  // componenetDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }
  //
  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push('/');
  //   }
  // }
  //
  // update(field) {
  //   return e => this.setState({ [field]: e.currentTarget.value });
  // }

  render() {
    return(
      <div>
        <h3>{`hey ${this.props.currentUser.username}`}</h3>
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    );
  }

}

export default withRouter(Header);
