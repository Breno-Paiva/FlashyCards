import { connect } from 'react-redux';
import { fetchSubscribers } from '../../actions/subscription_actions';
import CurrentLearners from './current_learners';


const mapStateToProps = (state) => {
  return { subscribers: Object.keys(state.subscribers).map(id => state.subscribers[id]) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubscribers: subjectId => dispatch(fetchSubscribers(subjectId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentLearners);
