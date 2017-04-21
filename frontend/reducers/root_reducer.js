import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectReducer from './subject_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subject: SubjectReducer
});

export default RootReducer;
