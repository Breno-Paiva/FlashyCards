import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectReducer from './subject_reducer';
import DeckReducer from './deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subject: SubjectReducer,
  decks: DeckReducer
});

export default RootReducer;
