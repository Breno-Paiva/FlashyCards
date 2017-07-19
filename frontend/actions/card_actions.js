import * as APIUtil from '../util/card_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";

export const fetchCard = card => dispatch => {
  APIUtil.fetchCard(card)
  .then(card => dispatch(receiveCard(card)))
};

export const fetchCards = deckId => dispatch => (
  APIUtil.fetchCards(deckId)
         .then(cards => dispatch(receiveCards(cards)))
);

export const createCard = card => dispatch => (
  APIUtil.createCard(card)
         .then(card => dispatch(receiveCard(card)),
               errors => dispatch(receiveCardErrors(errors.responseJSON)))
);
//
export const updateCard = card => dispatch => (
  APIUtil.updateCard(card)
         .then(subject => dispatch(receiveCard(card)),
            errors => dispatch(receiveCardErrors(errors.responseJSON)))
);
//
export const deleteCard = id => dispatch => (
  APIUtil.deleteCard(id)
         .then(card => dispatch(removeCard(card)))
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
