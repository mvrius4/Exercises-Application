import React, { useState, useEffect, useContext } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { GymContext } from '../pages/Home';

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    const { setExercises } = useContext(GymContext);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <section className='search-exercises'>
            <h2>
                Awesome Exercises You <br />
                Should Know
            </h2>
            <div className='search-exercises__input-container' position='relative' mb='5rem'>
                <input
                    placeholder='Search Exercises'
                    type='text'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    onSubmit={handleSearch}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='search-exercises__results'>
                <HorizontalScrollbar content={bodyParts} isBodyParts='true' />
            </div>
        </section>
    )
}

export default SearchExercises;