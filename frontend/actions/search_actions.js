import * as APIUtil from '../util/search_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SUBJECTS = "RECEIVE_SUBJECTS";

export const searchSubjects = (query) => dispatch => (
  APIUtil.searchSubjects(query)
         .then(subjects => dispatch(receiveSubjects(subjects)))
);

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});
