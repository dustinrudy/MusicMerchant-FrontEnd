import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main/main';
import {Dash} from './app/dashboard/home';
import loggedIn from './app/helpers/loggedIn';
import hasSession from './app/helpers/hasSession';
import logOut from './app/helpers/logOut';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" onEnter={hasSession} component={Main}/>
    <Route path="/dashboard" onEnter={loggedIn} component={Dash}/>
    <Route path="/logout" onEnter={logOut}/>
  </Router>,
  document.getElementById('root')
);
