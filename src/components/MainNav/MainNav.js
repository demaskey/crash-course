import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export function MainNav() {
    const [currentLocation, setCurrentLocation] = useState('Home');

    const currentLocationStyle = {
        'font-weight': 'bold'
    };

    return (
        <nav>
            <ul>
                <li>
                    {currentLocation === 'Home' && (
                        <span style={currentLocationStyle}>Home</span>
                    )}
                    {currentLocation !== 'Home' && (
                        <Link to="/" onClick={ () => setCurrentLocation('Home')}>Home</Link>
                    )}
                    
                </li>
                <li>
                    {currentLocation === 'Counter' && (
                        <span style={currentLocationStyle} >Counter</span>
                    )}
                    {currentLocation !== 'Counter' && (
                        <Link to="/counter" onClick={ () => setCurrentLocation('Counter')}>Counter</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}