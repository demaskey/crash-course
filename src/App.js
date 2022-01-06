import React from 'react';
import AppRoutes from './routes';
import { MainNav } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div role="main" id="Content">
          <MainNav />
          <hr />
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
