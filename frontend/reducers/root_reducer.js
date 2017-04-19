import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer
});

export default RootReducer;
