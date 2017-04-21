import { connect } from 'react-redux';
import { fetchSubjects, fetchSubject, createSubject, updateSubject, deleteSubject } from '../../actions/subject_actions';
import Subject from './Subject';


const mapStateToProps = state => {
  return{
    // loggedIn: Boolean(state.session.currentUser),
    // errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  // const sessionAction = (formType === 'login') ? login : signup;

  return {
    // processForm: user => dispatch(sessionAction(user)),
    // formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject);
