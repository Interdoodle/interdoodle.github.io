import React from 'react';

export default class Project extends React.Component {
  render() {
    return <div id="project">
      <header>
        <h1>{this.props.params.project}</h1>
      </header>
      <main>
        <div className="description">
          <p>Project description.</p>
        </div>
      </main>
    </div>;
  }
}