import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/autocar">Autocar</Link></li>
                    <li><Link href="/moto">Moto</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;