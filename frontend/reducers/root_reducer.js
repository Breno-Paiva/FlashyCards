import { combineReducers } from 'redux';
import SessionReducer from './session_reducer'

const RootReducers = combineReducers({
  currentUser: SessionReducer
})

export default RootReducer;
