import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

import App from './app';
import HomeContainer from './home/home_container';
import LibraryContainer from './library/library_container';
import DeckContainer from './deck/deck_container';
import CardContainer from './card/card_container';
import StudyContainer from './study/study_container';
import SearchContainer from './search/search_container';

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
          <Route path="/search" component={SearchContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/library" component={LibraryContainer} onEnter={_ensureLoggedIn}>
            <Route path=":subjectId" />
          </Route>
          <Route path="/decks/:deckId/cards" component={CardContainer} />
          <Route path="/study/:deckId" component={StudyContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
