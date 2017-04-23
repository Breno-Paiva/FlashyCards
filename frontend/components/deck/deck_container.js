import { connect } from 'react-redux';
import { fetchDecks, fetchDeck } from '../../actions/deck_actions';
import Deck from './deck';


const mapStateToProps = (state, { currentSubjectId } ) => {
  return {
    decks: Object.keys(state.deck).map(id => state.deck[id]) ,
    currentSubjectId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: subjectId => dispatch(fetchSubjects(subjectId)),
    fetchDeck: deck => dispatch(fetchSubject(deck))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
