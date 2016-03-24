import React from 'react';
import fetch from './ajax';

export default class Project extends React.Component {
  constructor(props) {
    super(props);

    fetch("/projects.json").then((x) => {
      this.state = { projects: x };
      console.log(x);
    });
  }

  render() {
    return <div id="project">
      <header>
        <h1>{this.props.name}</h1>
        <nav>
          <a href="">Source Code</a>
          <a href="">Activity</a>
        </nav>
      </header>
      <main>
        <div className="description">
          <p>{this.props.description}</p>
        </div>
        {this.props.details}
      </main>
    </div>;
  }
}