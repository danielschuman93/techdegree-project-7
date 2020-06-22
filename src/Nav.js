import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/guitars'>Guitars</NavLink></li>
                <li><NavLink to='/figs'>Figs</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;