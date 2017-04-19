import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(RootReducer, applyMiddleware(thunk, logger))
);

export default configureStore;
