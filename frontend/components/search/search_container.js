import { connect } from 'react-redux';
import Search from './search';
import { searchSubjects } from '../../actions/search_actions';
import { createSubscriber } from '../../actions/subscription_actions';


const mapStateToProps = state => {
  return { subjects: Object.keys(state.subject).map(id => state.subject[id]) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchSubjects: query => dispatch(searchSubjects(query)),
    createSubscriber: subject => dispatch(createSubscriber(subject))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
