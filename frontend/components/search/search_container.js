import { connect } from 'react-redux';
import Search from './search';
import { searchSubjects } from '../../actions/search_actions';
import { clearSubjects } from '../../actions/subject_actions';
import { createSubscriber, removeSubscription } from '../../actions/subscription_actions';


const mapStateToProps = state => {

  return {
    subjects: Object.keys(state.subject).map(id => state.subject[id]),
    subscribers: state.subscribers
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchSubjects: query => dispatch(searchSubjects(query)),
    createSubscriber: subject => dispatch(createSubscriber(subject)),
    removeSubscription: subject => dispatch(removeSubscription(subject)),
    clearSubjects: () => dispatch(clearSubjects())
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
