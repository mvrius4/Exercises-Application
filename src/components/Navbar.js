import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <header>
            <Link to='/'>
                <img className='logo' src={Logo} alt='logo' />
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <a href='#exercises'>Exercises</a>
            </nav>
        </header>
    )
}

export default Navbar;