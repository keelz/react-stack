import * as React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../common/constants/routes';

const AppHeader: React.SFC = () =>
  <header className="App-header">
    <div className="App-navigator">
      <ul>
        <li><Link to={ROUTES.BASE_ROUTE}>Home</Link></li>
        <li><Link to={ROUTES.ABOUT}>About</Link></li>
        <li><Link to={ROUTES.TOPICS}>Topics</Link></li>
      </ul>
    </div>
  </header>;

export default AppHeader;
