import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import Work from './Work';

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="/projects" component={Projects}>
    <Route path="/projects/:project" component={Project}/>
  </Route>
  <Route path="/work" component={Work}/>
  <Route path="/about" component={About}/>
</Route>;
