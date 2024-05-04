import React from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import chaien from '../../../assets/chaien.jpg';
import nobita from '../../../assets/nobita.jpg';
import shizuka from '../../../assets/shizuka.jpg';
import suneo from '../../../assets/suneo.jpg';
import './gridImage.css';

const Test = () => {
    return (
        <>
            <div class="gallery">
                <div class="card">
                    <img src={doraemon} />
                </div>
                <div class="card">
                    <img src={chaien} />
                </div>
                <div class="card">
                    <img src={shizuka} />
                </div>
                <div class="card">
                    <img src={suneo} />
                </div>
                <div class="card">
                    <img src={nobita} />
                </div>
                <div class="card">
                    <img src={doraemon} />
                </div>
            </div>
        </>
    );
}

export default Test;