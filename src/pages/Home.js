import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </>
    )
}

export default Home;