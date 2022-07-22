import React, { useContext } from 'react';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <img src={LeftArrowIcon} onClick={() => scrollPrev()} className="left-arrow" alt='left-arrow' />
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <img src={RightArrowIcon} onClick={() => scrollNext()} className="right-arrow" alt='right-arrow' />
    );
};

const HorizontalScrollbar = ({ bodyParts }) => {

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                bodyParts.map(part => (
                    <BodyPart itemId={part.id || part} title={part.id || part} key={part.id || part} />
                ))
            }
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;