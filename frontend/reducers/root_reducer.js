import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'

const combineReducers = combineReducers({
  currentUser: SessionReducer
})

export default RootReducer;
