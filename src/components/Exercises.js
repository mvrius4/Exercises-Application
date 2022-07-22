import React, { useContext, useEffect, useState } from 'react';
import Exercise from './Exercise';
import { GymContext } from '../pages/Home';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Exercises = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const { exercises, setExercises, bodyPart } = useContext(GymContext);

    useEffect(() => {
        const fetchExerciseData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        }
        fetchExerciseData();
    }, [bodyPart]);


    // this is where the pagination begins
    const indexOfLastPost = postsPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentExercises = exercises.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        setCurrentPage(1);
    }, [bodyPart]);

    return (
        <>
            <div className='exercises'>
                {currentExercises.map(exercise => (
                    <Exercise exercise={exercise} key={exercise.name} />
                ))}
            </div>
            <div className='exercises-footer'>
                <p>There are {exercises.length} exercises found.</p>
                <div className='exercises-footer__buttons'>
                    <button onClick={() => setCurrentPage(1)}>First</button>
                    <button onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage}>Prev</button>
                    <button onClick={() => currentPage < Math.floor(exercises.length / postsPerPage) ? setCurrentPage(currentPage + 1) : currentPage}>Next</button>
                    <button onClick={() => setCurrentPage(Math.floor(exercises.length / postsPerPage))}>Last</button>
                </div>
            </div>
        </>
    )
}

export default Exercises;