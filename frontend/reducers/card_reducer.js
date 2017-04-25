import { RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD} from '../actions/card_actions';
import merge from 'lodash/merge';

const CardReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      return merge({}, state, {[action.card.id]: action.card});
    case REMOVE_CARD:
      delete newState[action.card]
      return newState;
    default:
      return state;
  }
};

export default CardReducer;
