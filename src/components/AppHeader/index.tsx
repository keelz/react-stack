import * as React from 'react';
import { Link } from 'react-router-dom';

const AppHeader: React.SFC = () =>
  <header className="App-header">
    <div className="App-navigator">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
  </header>;

export default AppHeader;
