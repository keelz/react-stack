import * as React from 'react';
import ROUTES from '../../common/constants/routes';
import About from '../About';
import Home from '../Home';
import Topics from '../Topics';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const AppRouter: React.SFC = props =>
  <div className="Router">
    <Router>
      <div>
        { props.children }
        <Route exact path={ROUTES.BASE_ROUTE} component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.TOPICS} component={Topics} />
      </div>
    </Router>
  </div>;

export default AppRouter;
