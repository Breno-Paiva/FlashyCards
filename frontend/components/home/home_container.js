import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Home from './home';


const mapStateToProps = state => {
  return{
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const sessionAction = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(sessionAction(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
