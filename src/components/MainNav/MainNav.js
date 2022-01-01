import React from 'react';
import { Link } from 'react-router-dom';

export function MainNav() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
}