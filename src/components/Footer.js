import React from 'react';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Logo} alt='logo' />
            <p>Exercises's website, created by <a href='https://github.com/mvrius4' target='_blank' rel='noreferrer'>mvrius</a>.</p>
        </div>
    )
}

export default Footer;