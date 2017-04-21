import * as APIUtil from '../util/subject_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SUBJECTS = "RECEIVE_SUBJECTS";
export const RECEIVE_SUBJECT = "RECEIVE_SUBJECT";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";
export const RECEIVE_SUBJECT_ERRORS = "RECEIVE_SUBJECT_ERRORS";

export const fetchSubjects = () => dispatch => (
  APIUtil.fetchSubjects(subject)
         .then(subjects => dispatch(receiveSubjects(subjects)))
);

export const fetchSubject = (subject) => dispatch => {
  APIUtil.fetchSubject(subject)
         .then(subject => dispatch(receiveSubject()))
};

export const createSubject = subject => dispatch => (
  APIUtil.createSubject(subject)
         .then(subject => dispatch(receiveSubject(subject)),
               errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
);

export const updateSubject = subject => dispatch => (
  APIUtil.updateSubject(subject)
      .then(subject => dispatch(receiveSubject(subject)),
            errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
);

export const deleteSubject = subject => dispatch => (
  APIUtil.deleteSubject()
         .then(subject => dispatch(removeSubject(subject)),
               errors => dispatch(receiveSubjectErrors(errors.responseJSON)))
);

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveSubject = subject => ({
  type: RECEIVE_SUBJECT,
  subject
});

export const removeSubject = subject => ({
  type: REMOVE_SUBJECT,
  subject
});

export const receiveSubjectErrors = errors => ({
  type: RECEIVE_SUBJECT_ERRORS,
  errors
});
//
// export const clearErrors = () => ({
//   type: CLEAR_ERRORS
// });
