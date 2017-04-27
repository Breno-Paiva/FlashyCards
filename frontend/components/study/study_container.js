import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card_actions';
import Study from './study';
import { createScore, updateScore } from '../../actions/score_actions.js'

const mapStateToProps = (state) => {
  var scores = Object.keys(state.card).map(id => {
    if (state.card[id].score){
      return (state.card[id].score)
    }else{
      return (0)
    }
  })
  return {
    cards: Object.keys(state.card).map(id => state.card[id]),
    scores: scores
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
