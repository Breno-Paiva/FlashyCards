import { connect } from 'react-redux';
import { fetchCards, fetchCard, createCard, deleteCard } from '../../actions/card_actions';
import Card from './card';


const mapStateToProps = (state) => {
  return {
    // subject: state.subject[currentSubjectId],
    // decks: Object.keys(state.deck).map(id => state.deck[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchCard: card => dispatch(fetchCard(card)),
    createCard: card => dispatch(createCard(card)),
    deleteCard: card => dispatch(deleteCard(card))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
