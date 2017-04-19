import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const logger = createLogger();

const configureStore = () => (
  createStore(RootReducer, applyMiddleware(thunk, logger))
);

export default configureStore;
