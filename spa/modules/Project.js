import React from 'react';
import _ from 'lodash';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: require("json!../data/projects")};
  }

  render() {
    const project = _.find(this.state.projects, (p) => {
      return p.name === this.props.params.project});

    return <div id="project">
      <header>
        <h1>{project.name}</h1>
        <nav>
          <a href="">Source Code</a>
          <a href="">Activity</a>
        </nav>
      </header>
      <main>
        <div className="description">
          <p>{project.description}</p>
        </div>
      </main>
    </div>;
  }
}