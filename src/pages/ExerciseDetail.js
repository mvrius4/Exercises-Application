import React, { useState, useEffect } from 'react';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetSimilar, setTargetSimilar] = useState({});
    const [equipmentSimilar, setEquipmentSimilar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const exercisesURL = 'https://exercisedb.p.rapidapi.com/exercises';
        const youtubeURL = 'https://youtube-search-and-download.p.rapidapi.com';
        const fetchExerciseData = async () => {
            const exerciseDetailData = await fetchData(`${exercisesURL}/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeURL}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);

            const targetSimilarData = await fetchData(`${exercisesURL}/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetSimilar(targetSimilarData.slice(0, 22));

            const equipmentSimilarData = await fetchData(`${exercisesURL}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentSimilar(equipmentSimilarData.slice(0, 22));
        }
        fetchExerciseData();
    }, [id]);

    return (
        <div className='exercise-detail'>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises target={targetSimilar} equipment={equipmentSimilar} />
        </div>
    )
}

export default ExerciseDetail;