import React from 'react';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <main className='hero'>
            <h2><span className='colored'>Fitness Club</span></h2>
            <h1>Sweat, Smile <br /> and Repeat</h1>
            <h4>Check out the most effective exercises</h4>
            <button href='#exercises'>Explore exercises</button>
            <span className='hero-banner__main-text'>Exercise</span>
            <img src={HeroBannerImage} className='hero-banner__img' alt='img' />
        </main>
    )
}

export default HeroBanner;