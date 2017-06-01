import { RECEIVE_SUBSCRIBERS } from '../actions/subscription_actions';
import merge from 'lodash/merge';

const SubscriptionReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SUBSCRIBERS:
      return action.subscribers;
    default:
      return state;
  }
};

export default SubscriptionReducer;
