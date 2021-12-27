import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

const Home = lazy(()=>import('./Home/Home'));
const About = lazy(()=>import('./About/About'));

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