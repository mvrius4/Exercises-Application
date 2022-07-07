import React from 'react';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <main className='hero'>
            <h3><span className='colored'>Fitness Club</span></h3>
            <h1>Sweat, Smile <br /> and Repeat</h1>
            <p>Check out the most effective exercises</p>
            <button href='#exercises'>Explore exercises</button>
            <span className='hero-banner__main-text'>Exercise</span>
            <img src={HeroBannerImage} className='hero-banner__img' alt='img' />
        </main>
    )
}

export default HeroBanner;