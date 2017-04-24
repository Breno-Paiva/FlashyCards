import { connect } from 'react-redux';
import { fetchDecks, fetchDeck, createDeck, deleteDeck } from '../../actions/deck_actions';
import Deck from './deck';


const mapStateToProps = (state, ownProps ) => {

  return {
    decks: Object.keys(state.deck).map(id => state.deck[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: subjectId => dispatch(fetchDecks(subjectId)),
    fetchDeck: deck => dispatch(fetchDeck(deck)),
    createDeck: deck => dispatch(createDeck(deck)),
    deleteDeck: deck => dispatch(deleteDeck(deck))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
