import React from 'react';
import {Link} from 'react-router';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: require("json!../data/projects")};
  }

  render() {
    return <div id="projects">
      <header>
        <h1>Projects</h1>
        <ul>
          { this.state.projects.map(x => {
            return <li key={x.name}><Link to={'/projects/'+x.name}>{x.name}</Link></li>;
          })}
        </ul>
      </header>
      {this.props.children}
    </div>;
  }
}