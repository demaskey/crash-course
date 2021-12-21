import React, {lazy, Suspense} from 'react';
import Routes from 'routes';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div role="main" id="Content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
