import { RECEIVE_DECKS,
  RECEIVE_DECK,
  REMOVE_DECK} from '../actions/deck_actions';
import merge from 'lodash/merge';

const DeckReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case RECEIVE_DECK:
      return merge({}, state, {[action.deck.id]: action.deck});
    case REMOVE_DECK:
      delete newState[action.deck]
      return newState;
    default:
      return state;
  }
};

export default DeckReducer;
