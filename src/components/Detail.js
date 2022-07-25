import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/equipment.png';
import EquipmentImage from '../assets/icons/target.png';

const Detail = ({ exerciseDetail }) => {
    const {
        name,
        bodyPart,
        target,
        gifUrl,
        equipment
    } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <div className='exercise-detail__details'>
            <div className='exercise-detail__details-text'>
                <h2>{name}</h2>
                <p>
                    Exercises keep you healthy and strong. <br></br>
                    {name} is targeting your {bodyPart}, helping you to strengthen it!
                </p>
                <div className='exercise-detail__details-info'>
                    {extraDetail.map((detail, index) => (
                        <div key={index} className='details-info'>
                            <img src={detail.icon} alt={detail.name} />
                            <p>{detail.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='exercise-detail__details-image'>
                <img src={gifUrl} alt='details-img' className='details-image' />
            </div>
        </div >
    )
}

export default Detail;