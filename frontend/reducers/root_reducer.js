import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectReducer from './subject_reducer';
import DeckReducer from './deck_reducer';
import CardReducer from './card_reducer';
import SubscriptionReducer from './subscription_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subject: SubjectReducer,
  deck: DeckReducer,
  card: CardReducer,
  subscribers: SubscriptionReducer
});

export default RootReducer;
