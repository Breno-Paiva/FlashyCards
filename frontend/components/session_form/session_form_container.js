import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => {
  return{
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, { formType, switchForm }) => {

  const sessionAction = (formType === 'login') ? login : signup;

  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(sessionAction(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
