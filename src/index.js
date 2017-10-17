// @flow
import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker              from './registerServiceWorker';

/** Modules **/
import MainStore from './MainStore';

/** Stylesheets **/
import './index.css';

/** Components **/
import {
  App,
  Home
} from './Components';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" render={() => <Home api={MainStore} />} />
      {/* <Route exact path="/" component={Home} /> */}
    </App>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
