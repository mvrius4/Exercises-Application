import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export const GymContext = React.createContext();

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    const gymContextValues = {
        exercises,
        setExercises,
        bodyPart,
        setBodyPart
    }
    return (
        <GymContext.Provider value={gymContextValues}>
            <HeroBanner />
            {/* <SearchExercises />
            <Exercises /> */}
        </GymContext.Provider>
    )
}

export default Home;