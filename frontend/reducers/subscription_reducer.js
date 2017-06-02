import { RECEIVE_SUBSCRIBERS, RECEIVE_SUBSCRIBER, REMOVE_SUBSCRIBER } from '../actions/subscription_actions';
import merge from 'lodash/merge';

const SubscriptionReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_SUBSCRIBERS:
      return action.subscribers;
    case RECEIVE_SUBSCRIBER:
      return merge({}, state, {[action.subscriber.id]: action.subscriber});
    case REMOVE_SUBSCRIBER:
    delete newState[action.subscriber]
    return newState;
    default:
      return state;
  }
};

export default SubscriptionReducer;
