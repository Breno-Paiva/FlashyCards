import React from 'react';
import Header from './header/header_container'

const App = ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
);

export default App;
