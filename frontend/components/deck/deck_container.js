import { connect } from 'react-redux';
import { fetchDecks, fetchDeck } from '../../actions/deck_actions';
import Deck from './deck';


const mapStateToProps = (state, { currentSubjectId } ) => {
  return {
    subject: state.subject[currentSubjectId],
    decks: Object.keys(state.deck).map(id => state.deck[id]) ,
    currentSubjectId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: subjectId => dispatch(fetchDecks(subjectId)),
    fetchDeck: deck => dispatch(fetchDeck(deck))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
