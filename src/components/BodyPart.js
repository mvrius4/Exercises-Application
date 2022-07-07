import React from 'react';

import CardImage from '../assets/icons/gym.png';

const BodyPart = ({ part }) => {
    return (
        <>
            <img src={CardImage} alt='img' className='search-exercises__body-part-icon' />
            <p>{part}</p>
        </>
    )
}

export default BodyPart;