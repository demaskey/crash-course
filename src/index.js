import React, {lazy, Suspense} from 'react';

import {Route, Switch} from 'react-router-dom';

const Home = lazy(()=>import('./Home/Home'));

export default function Routes() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
}

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
