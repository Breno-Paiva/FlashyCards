import { connect } from 'react-redux';
import { fetchDecks, fetchDeck } from '../../actions/deck_actions';
import Deck from './deck';


const mapStateToProps = state => {
  return { decks: Object.keys(state.deck).map(id => state.deck[id]) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: subject => dispatch(fetchSubjects(subject)),
    fetchDeck: deck => dispatch(fetchSubject(deck))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
