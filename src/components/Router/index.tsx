import * as React from 'react';
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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </div>;

export default AppRouter;
