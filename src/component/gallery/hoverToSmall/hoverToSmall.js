import React from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import chaien from '../../../assets/chaien.jpg';
import nobita from '../../../assets/nobita.jpg';
import shizuka from '../../../assets/shizuka.jpg';
import suneo from '../../../assets/suneo.jpg';
import './hoverToSmall.css';

const Test = () => {
    return (
        <>
            <div class="img-gallery">
                <img src={doraemon} />
                <img src={chaien} />
                <img src={nobita} />
                <img src={shizuka} />
                <img src={suneo} />
            </div>
        </>
    );
}

export default Test;