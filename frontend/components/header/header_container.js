import { connect } from 'react-redux';
import { logout, clearErrors, login } from '../../actions/session_actions';
import Header from './header';


const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(login({user:{username: "flashyUser", password: "friskyb"}}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
