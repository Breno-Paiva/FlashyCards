import * as APIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIBERS = "RECEIVE_SUBSCRIBERS";
export const RECEIVE_SUBSCRIBER = "RECEIVE_SUBSCRIBER";
export const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";
export const RECEIVE_SUBJECT = "RECEIVE_SUBJECT";

export const fetchSubscribers = subjectId => dispatch => {
  APIUtil.fetchSubscribers(subjectId)
         .then(subscribers => dispatch(receiveSubscribers(subscribers)))
};

export const createSubscriber = subject => dispatch => {
  APIUtil.createSubscriber(subject)
         .then(subject => dispatch(receiveSubscriber(subject)))
};

export const removeSubscription = subjectId => dispatch => {
  APIUtil.removeSubscription(subjectId)
         .then(subject => dispatch(deleteSubscriber(subject)))
};

export const receiveSubscribers = subscribers => ({
  type: RECEIVE_SUBSCRIBERS,
  subscribers
});

export const receiveSubscriber = subject => ({
  type: RECEIVE_SUBJECT,
  subject: Object.values(subject)[0]
});

export const deleteSubscriber = subject => ({
  type: RECEIVE_SUBJECT,
  subject: Object.values(subject)[0]
});
