import React from 'react';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ bodyParts }) => {
    return (
        bodyParts.map(part => {
            return (
                <div className='search-exercises__body-part' key={part}>
                    <BodyPart part={part} />
                </div>
            )
        })
    )
}

export default HorizontalScrollbar;