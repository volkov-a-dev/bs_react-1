import React from 'react';
import logo from '../../logo.svg';

import './Header.css';


let haeder = function () {
    return (
        <header className="main-header">
            <div className="main-header__col">
                <p className="main-header__text">React App</p>
            </div>
            <div className="main-header__col">
                <img src={logo} className="app-logo" alt="logo" />
            </div>
        </header>
    )
}

export default haeder;