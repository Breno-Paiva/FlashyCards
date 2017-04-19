import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = ownProps.location.pathname.slice(1);
  const sessionAction = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(sessionAction(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
