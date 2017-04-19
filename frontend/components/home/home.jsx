import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { username: "", password: "" };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentDidUpdate() {
//     this.redirectIfLoggedIn();
//   }
//
//   redirectIfLoggedIn() {
//     if (this.props.loggedIn) {
//       this.props.router.push('/');
//     }
//   }
//
//   update(field) {
//     return e => this.setState({ [field]: e.currentTarget.value });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = this.state;
//     this.props.processForm({user});
//     this.setState({ username: "", password: "" });
//   }
//
//   renderErrors() {
//   return (
//     <ul>
//       {this.props.errors.map((error, i) => (
//         <li key={`error-${i}`}>
//           {error}
//         </li>
//       ))}
//     </ul>
//   );
// }
//
//   navLink() {
//     if (this.props.formType === "login") {
//       return <Link to="/signup">sign up instead</Link>;
//       }else{
//       return <Link to="/login">login instead</Link>;
//       }
//   }

  render() {
    return(
      <div className="home-container">
        <h3>dis be da home page</h3>
      </div>
    );
  }

}

export default withRouter(Home);
