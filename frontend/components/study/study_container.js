import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card_actions';
import Study from './study';
import { createScore, updateScore } from '../../actions/score_actions.js'

const mapStateToProps = (state) => {
  return {
    // cardObjects: state.card,
    cards: Object.keys(state.card).map(id => state.card[id])
    // // subject: state.subject[currentSubjectId],
    // // decks: Object.keys(state.deck).map(id => state.deck[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    createScore: score => dispatch(createScore(score)),
    updateScore: score => dispatch(updateScore(score))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
