import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header>
            <nav className="nav-bar">
                <ul className="nav-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/auto">Auto</Link></li>
                    <li><Link to="/moto">Moto</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;