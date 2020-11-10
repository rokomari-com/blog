import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">Ronnie's Blog</Link>
            </h1>
        </header>
    );
};

export default Header;