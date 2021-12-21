import React, {lazy, Suspense} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import {Route, Routes} from 'react-router-dom';

const Home = lazy(()=>import('./routes/Home/Home'));
const About = lazy(()=>import('./routes/About/About'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </Suspense>
  );
}


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
