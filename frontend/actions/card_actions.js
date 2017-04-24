import * as APIUtil from '../util/card_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
// export const RECEIVE_SUBJECT_ERRORS = "RECEIVE_SUBJECT_ERRORS";

export const fetchCards = deckId => dispatch => (
  APIUtil.fetchCards(deckId)
         .then(cards => dispatch(receiveCards(cards)))
);

export const fetchCard = card => dispatch => {
  APIUtil.fetchCard(card)
         .then(card => dispatch(receiveCard(card)))
};

export const createCard = card => dispatch => (
  APIUtil.createCard(card)
         .then(card => dispatch(receiveCard(card)),
               errors => dispatch(receiveCardErrors(errors.responseJSON)))
);
//
// export const updateSubject = deck => dispatch => (
//   APIUtil.updateSubject(subject)
//       .then(subject => dispatch(receiveSubject(subject)),
//             errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
// );
//
export const deleteCard = card => dispatch => (
  APIUtil.deleteCard(card)
         .then(card => dispatch(REMOVE_CARD(card)))
              //  errors => dispatch(receiveCardErrors(errors.responseJSON)))
);

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const removeCard = card => ({
  type: REMOVE_CARD,
  card
});
//
// export const receiveSubjectErrors = errors => ({
//   type: RECEIVE_SUBJECT_ERRORS,
//   errors
// });
//
// export const clearErrors = () => ({
//   type: CLEAR_ERRORS
// });
