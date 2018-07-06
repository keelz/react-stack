import * as React from 'react';
import AppHeader from '../AppHeader';
import Router from '../Router';

const App: React.SFC = () =>
  <div className="App">
    <Router>
      <AppHeader />
    </Router>
  </div>;

export default App;
