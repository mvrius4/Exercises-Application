import React from 'react';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <div
        // sx={{
        //     mt: { lg: '212px', xs: '70px' },
        //     ml: { sm: '50px' }
        // }}
        // position='relative'
        // p='1.2rem'
        >
            <h2>Fitness Club</h2>
            <h1
            // sx={{
            //     fontSize: { lg: '2.5rem', xs: '2rem' },
            // }}
            // fontWeight='700'
            >
                Sweat, Smile <br /> and Repeat
            </h1>
            <h4 fontSize='1.3rem' lineHeight='2.25rem' mb='1rem'>
                Check out the most effective exercises
            </h4>
            <button href='#exercises'>Explore exercises</button>
            <span className='hero-banner__main-text'
            // sx={{
            //     opacity: .3,
            //     display: { lg: 'block', xs: 'none' }
            // }}
            // fontWeight='600'
            // color='#009fcf'
            // fontSize='200px'
            >
                Exercise
            </span>
            <img src={HeroBannerImage} className='hero-banner-img' alt='img' />
        </div>
    )
}

export default HeroBanner;