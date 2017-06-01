import * as APIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIBERS = "RECEIVE_SUBSCRIBERS";

export const fetchSubscribers = subjectId => dispatch => {
  APIUtil.fetchSubscribers(subjectId)
         .then(subscribers => dispatch(receiveSubscribers(subscribers)))
};

export const receiveSubscribers = subscribers => ({
  type: RECEIVE_SUBSCRIBERS,
  subscribers
});
