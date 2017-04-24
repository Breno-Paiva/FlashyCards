import { connect } from 'react-redux';
// import { fetchDecks, fetchDeck, createDeck } from '../../actions/deck_actions';
import CurrentLearners from './current_learners';


const mapStateToProps = (state, { currentSubjectId } ) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentLearners);
