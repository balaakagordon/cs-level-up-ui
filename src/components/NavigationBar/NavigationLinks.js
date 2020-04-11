import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <div className='nav'>
            <li className="nav-item">
                <Link to="/" className="text-white">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/algorithms" className="text-white">
                    Algorithms
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/notes" className="text-white">
                    Notes
                </Link>
            </li>
            <li className="nav-item float-right">
                <Link to="/about" className="text-white">
                    About
                </Link>
            </li>
        </div>
    );
}

export default NavigationLinks;
