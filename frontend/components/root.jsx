import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import TestContainer from './test_container';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={TestContainer}/>
      </Router>
    </Provider>
  );
};


export default Root;
