import * as APIUtil from '../util/deck_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
// export const RECEIVE_SUBJECT_ERRORS = "RECEIVE_SUBJECT_ERRORS";

export const fetchDecks = subjectId => dispatch => (
  APIUtil.fetchDecks(subjectId)
         .then(decks => dispatch(receiveDecks(decks)))
);

export const fetchDeck = id => dispatch => {
  APIUtil.fetchDeck(id)
         .then(deck => dispatch(receiveDeck(deck)))
};

export const createDeck = deck => dispatch => (
  APIUtil.createDeck(deck)
         .then(deck => dispatch(receiveDeck(deck)),
               errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);
//
// export const updateSubject = subject => dispatch => (
//   APIUtil.updateSubject(subject)
//       .then(subject => dispatch(receiveSubject(subject)),
//             errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
// );
//
export const deleteDeck = deck => dispatch => (
  APIUtil.deleteDeck(deck)
         .then(deck => dispatch(removeDeck(deck)))
              //  errors => dispatch(receiveDeckErrors(errors.responseJSON)))
);

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

export const removeDeck = deck => ({
  type: REMOVE_DECK,
  deck
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
