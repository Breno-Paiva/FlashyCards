import React from 'react';
import Header from './header/header_container'

const App = ({ children }) => (
  <div>
    <h2>Flashy Cards</h2>
    <Header />
    { children }
  </div>
);

export default App;
