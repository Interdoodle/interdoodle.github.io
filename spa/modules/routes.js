import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import About from './About';
import Home from './Home';

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="/about" component={About}/>
</Route>;
