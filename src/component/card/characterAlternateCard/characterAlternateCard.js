import React from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import chaien from '../../../assets/chaien.jpg';
import nobita from '../../../assets/nobita.jpg';
import shizuka from '../../../assets/shizuka.jpg';
import suneo from '../../../assets/suneo.jpg';
import './characterAlternateCard.css';

const Test = () => {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <img src={doraemon} />
                </div>
                <div className='card'>
                    <img src={nobita} />
                </div>
                <div className='card'>
                    <img src={shizuka} />
                </div>
                <div className='card'>
                    <img src={chaien} />
                </div>
                <div className='card'>
                    <img src={suneo} />
                </div>
            </div>
        </>
    );
}

export default Test;