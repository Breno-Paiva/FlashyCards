import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

import App from './app';
import HomeContainer from './home/home_container';
import LibraryContainer from './library/library_container';
import DeckContainer from './deck/deck_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/home" />
          <Route path="/home" component={HomeContainer} />
          <Route path="/library" component={LibraryContainer} onEnter={_ensureLoggedIn}>
            <Route path=":subjectId" />
          </Route>
          <Route path="/decks/:deckId/cards" />
        </Route>
      </Router>
    </Provider>
  );
};

// <Route path="/library" component={LibraryContainer} onEnter={_ensureLoggedIn}>
//   <Route path="/:subjectId" />
// </Route>

// at '/'  redirect to either home or library...
// at library redirect to home unless logged in
export default Root;
