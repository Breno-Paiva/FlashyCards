import * as APIUtil from '../util/score_api_util';
import { hashHistory } from 'react-router';
import { receiveCard } from "./card_actions.js"

export const createScore = score => dispatch => (
  APIUtil.createScore(score).then(card => dispatch(receiveCard(card)))
);

export const updateScore = score => dispatch => (
  APIUtil.updateScore(score).then(subject => dispatch(receiveCard(card)))
);
