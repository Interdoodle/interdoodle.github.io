import React from 'react';
import NavLink from './NavLink';

require('../sass/App.sass');

export default React.createClass({
  render() {
    let year = new Date().getFullYear();

    return <div id="app">
      <header>
        <h1>Interdoodle</h1>
        <nav id="primary">
          <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <nav id="user">
          <NavLink to="/login" id="login">Login</NavLink>
        </nav>
      </header>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p className="copyright">Copyright {year} Interdoodle Ltd.  All Rights Reseaved.</p>
      </footer>
    </div>;
  }
});