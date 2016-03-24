import React from 'react';
import NavLink from './NavLink';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: require("json!../data/projects")};
  }

  render() {
    const content = this.props.children || <p>Root.</p>;

    return <div id="projects">
      <header>
        <h1>Projects</h1>
        <ul>
          { this.state.projects.map(x => {
            return <li key={x.name}><NavLink to={'/projects/'+x.name}>{x.name}</NavLink></li>;
          })}
        </ul>
      </header>
      {content}
    </div>;
  }
}