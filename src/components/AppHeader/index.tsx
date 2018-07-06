import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../common/assets/img/logo.svg';

const AppHeader: React.SFC = () =>
  <header className="App-header">
    <div className="App-navigator">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>;

export default AppHeader;
