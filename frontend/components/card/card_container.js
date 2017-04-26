import { connect } from 'react-redux';
import { fetchCards, fetchCard, createCard, deleteCard, updateCard } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';
import Card from './card';


const mapStateToProps = (state, ownProps) => {
  // deck_name: Object.keys(state.deck).map(id => state.deck[id]),
  let deckName =""
  if(state.deck[ownProps.params.deckId]) {
    deckName = state.deck[ownProps.params.deckId].name
  }
  return {
    deckName,
    cardObjects: state.card,
    cards: Object.keys(state.card).map(id => state.card[id])
    // subject: state.subject[currentSubjectId],
    // decks: Object.keys(state.deck).map(id => state.deck[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchCard: card => dispatch(fetchCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    createCard: card => dispatch(createCard(card)),
    deleteCard: id => dispatch(deleteCard(id)),
    fetchDeck: id => dispatch(fetchDeck(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
