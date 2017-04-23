import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Library from './library';


const mapStateToProps = (state, {params}) => {
  return{
    currentUser: state.session.currentUser,
    currentSubjectId: params.subjectId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
