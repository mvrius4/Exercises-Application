import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    console.log(exerciseVideos);

    if (!exerciseVideos.length) return <Loader />

    return (
        <div className='exercise-detail__exercise-videos'>
            <h3>Get more informations about <span className='colored'>{name}</span> on YouTube.</h3>
            <div className='exercise-detail__exercises'>
                {exerciseVideos?.slice(0, 3).map((exercise, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${exercise.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={exercise.video.thumbnails[0].url} alt={exercise.video.title} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ExerciseVideos;