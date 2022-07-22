import React, { useContext } from 'react';
import { GymContext } from '../pages/Home';

import CardImage from '../assets/icons/gym.png';

const BodyPart = ({ title }) => {
    const { setBodyPart } = useContext(GymContext);

    return (
        <div onClick={() => { setBodyPart(title) }} className='search-exercises__body-part'>
            <img src={CardImage} alt='img' className='search-exercises__body-part-icon' />
            <p>{title}</p>
        </div>
    )
}

export default BodyPart;