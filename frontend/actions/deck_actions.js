import * as APIUtil from '../util/deck_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
// export const REMOVE_SUBJECT = "REMOVE_SUBJECT";
// export const RECEIVE_SUBJECT_ERRORS = "RECEIVE_SUBJECT_ERRORS";

export const fetchDecks = subjectId => dispatch => (
  APIUtil.fetchDecks(subjectId)
         .then(decks => dispatch(receiveDecks(decks)))
);

export const fetchDeck = deck => dispatch => {
  APIUtil.fetchSubject(deck)
         .then(deck => dispatch(receiveDeck()))
};

// export const createSubject = subject => dispatch => (
//   APIUtil.createSubject(subject)
//          .then(subject => dispatch(receiveSubject(subject)),
//                errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
// );
//
// export const updateSubject = subject => dispatch => (
//   APIUtil.updateSubject(subject)
//       .then(subject => dispatch(receiveSubject(subject)),
//             errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
// );
//
// export const deleteSubject = subject => dispatch => (
//   APIUtil.deleteSubject(subject)
//          .then(subject => dispatch(removeSubject(subject)),
//                errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
// );

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

// export const removeSubject = subject => ({
//   type: REMOVE_SUBJECT,
//   subject
// });
//
// export const receiveSubjectErrors = errors => ({
//   type: RECEIVE_SUBJECT_ERRORS,
//   errors
// });
//
// export const clearErrors = () => ({
//   type: CLEAR_ERRORS
// });
