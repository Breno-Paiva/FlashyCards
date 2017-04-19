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
          <Link to={'/login'}>Login</Link>
          <br/>
          <Link to={'/signup'}>Signup</Link>
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        <h3>Dis be da header</h3>
        { this.userGreet()}
      </div>
    );
  }

}

export default withRouter(Header);
