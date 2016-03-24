import React from 'react';
import NavLink from './NavLink';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: require("json!../data/projects"), content: ''};
  }

  render() {
    return <div id="projects">
      <header>
        <h1>Projects</h1>
        <ul>
          { this.state.projects.map(x => {
            return <li key={x.name}>
              <NavLink to={'/projects/'+x.name}>{x.name}</NavLink>
            </li>;
          })}
        </ul>
      </header>
      {this.props.children || <ProjectsHome/>}
    </div>;
  }

  fetch(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = () => {
        (req.status === 200) ?
          resolve(req.response) :
          reject(new Error(req.statusText));
      };
      req.onerror = () => { reject(new Error("Network error")); };
      req.send();
    });
  }
}

class ProjectsHome extends React.Component {
  render() {
    return <div className="project home">
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <p>Some projects.</p>
      </main>
    </div>;
  }
}