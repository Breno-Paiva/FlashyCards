import { RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT,
  REMOVE_SUBJECT,
  RECEIVE_SUBJECT_ERRORS } from '../actions/subject_actions';
import merge from 'lodash/merge';

const SubjectReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_SUBJECTS:
      return action.subjects;
    case RECEIVE_SUBJECT:
      return merge({}, state, {[action.subject.id]: action.subject});
    case REMOVE_SUBJECT:
      delete newState[action.subject]
      return newState;
    default:
      return state;
  }
};

export default SubjectReducer;
