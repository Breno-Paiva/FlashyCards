import * as APIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIBERS = "RECEIVE_SUBSCRIBERS";
export const RECEIVE_SUBSCRIBER = "RECEIVE_SUBSCRIBER";
export const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";

export const fetchSubscribers = subjectId => dispatch => {
  APIUtil.fetchSubscribers(subjectId)
         .then(subscribers => dispatch(receiveSubscribers(subscribers)))
};

export const createSubscriber = subject => dispatch => {
  APIUtil.createSubscriber(subject)
         .then(subscriber => dispatch(receiveSubscriber(subscriber)))
};

export const removeSubscription = subjectId => dispatch => {
  APIUtil.removeSubscription(subjectId)
         .then(subscriber => dispatch(deleteSubscriber(subscriber)))
};

export const receiveSubscribers = subscribers => ({
  type: RECEIVE_SUBSCRIBERS,
  subscribers
});

export const receiveSubscriber = subscriber => ({
  type: RECEIVE_SUBSCRIBER,
  subscriber
});

export const deleteSubscriber = subscriber => ({
  type: REMOVE_SUBSCRIBER,
  subscriber
});
