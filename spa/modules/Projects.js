import React from 'react';
import {Link} from 'react-router';

export default class Projects extends React.Component {
  render() {
    return <div id="projects">
      <header>
        <h1>Projects</h1>
        <ul>
          <li><Link to="/projects/pm">PM</Link></li>
          <li><Link to="/projects/tock">Tock</Link></li>
          <li><Link to="/projects/veo">Veo</Link></li>
        </ul>
      </header>
      {this.props.children}
    </div>;
  }
}