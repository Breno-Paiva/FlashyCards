import { connect } from 'react-redux';
import { fetchSubjects, fetchSubject, createSubject, updateSubject, deleteSubject } from '../../actions/subject_actions';
import Subject from './Subject';


const mapStateToProps = state => {
  return { subjects: Object.keys(state.subject).map(id => state.subject[id]) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjects: () => dispatch(fetchSubjects()),
    fetchSubject: subject => dispatch(fetchSubject(subject)),
    createSubject: subject => dispatch(createSubject(subject)),
    updateSubject: subject => dispatch(updateSubject(subject)),
    deleteSubject: subject => dispatch(deleteSubject(subject))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject);
