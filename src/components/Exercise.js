import React from 'react';
import { Link } from 'react-router-dom'

const Exercise = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`}>
            <div className='exercises__exercise-card'>
                <img src={exercise.gifUrl} alt={exercise.name} />
                <span className='blue-bg'>{exercise.bodyPart}</span>
                <p>{exercise.name}</p>
            </div>
        </Link>
    )
}

export default Exercise;