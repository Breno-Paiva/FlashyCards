import { RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT,
  REMOVE_SUBJECT,
  CLEAR_SUBJECTS } from '../actions/subject_actions';
import merge from 'lodash/merge';

const SubjectReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_SUBJECTS:
      return action.subjects;
    case RECEIVE_SUBJECT:
      return merge({}, newState, {[action.subject.id]: action.subject});
    case REMOVE_SUBJECT:
      delete newState[action.subject]
      return newState;
    case CLEAR_SUBJECTS:
      return {};
    default:
      return state;
  }
};

export default SubjectReducer;
