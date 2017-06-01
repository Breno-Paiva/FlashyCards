import { RECEIVE_SUBSCRIBERS, RECEIVE_SUBSCRIBER } from '../actions/subscription_actions';
import merge from 'lodash/merge';

const SubscriptionReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SUBSCRIBERS:
      return action.subscribers;
    case RECEIVE_SUBSCRIBER:
      return merge({}, state, {[action.subscriber.id]: action.subscriber});
    default:
      return state;
  }
};

export default SubscriptionReducer;
