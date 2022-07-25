import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = (props) => {
    const {
        target,
        equipment
    } = props;

    if (!(target.length && equipment.length)) return <Loader />

    return (
        <div className='exercise-details__similar-exercises'>
            <div className='similar-exercises__target'>
                <h3>Similar <span className='colored'>Target Muscle</span> exercises</h3>
                {target.length && <HorizontalScrollbar content={target} />}
            </div>
            <div className='similar-exercises__equipment'>
                <h3>Similar <span className='colored'>Equipment</span> exercises</h3>
                {equipment.length && <HorizontalScrollbar content={target} />}
            </div>
        </div>
    )
}

export default SimilarExercises;