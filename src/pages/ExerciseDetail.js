import React, { useState, useEffect } from 'react';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com';
        const similarExercises = 'https://youtube-search-and-download.p.rapidapi.com';
        const fetchExerciseData = async () => {
            const exerciseDetailData = await fetchData(`${exercisesURL}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExerciseData();
    }, [id]);

    return (
        <div className='exercise-detail'>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </div>
    )
}

export default ExerciseDetail;