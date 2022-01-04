import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

const Home = lazy( () => import('./Home/Home'));
const Counter = lazy( () => import('./Counter/Counter'));

export default function AppRoutes() {
    return (
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/counter'} element={<Counter />} />
          </Routes>
        </Suspense>
    );
}