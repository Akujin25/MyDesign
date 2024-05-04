import React, { useRef } from 'react';
import './test.css';
import test from '../assets/test.png';

const Test = () => {
    const imgRef = useRef(null);

    const myfunon = () => {
        imgRef.current.style.animationDuration = '3s';
    };

    const myfunoff = () => {
        imgRef.current.style.animationDuration = '0s';
    };

    const myfun1 = () => {
        imgRef.current.style.animationDuration = '1s';
    };

    const myfun2 = () => {
        imgRef.current.style.animationDuration = '0.5s';
    };

    const myfun3 = () => {
        imgRef.current.style.animationDuration = '0.1s';
    };

    return (
        <div className="main">
            <img ref={imgRef} src={test} alt="" />
            <div>
                <button onClick={myfunon}>ON</button>
                <button onClick={myfunoff}>OFF</button>
                <button onClick={myfun1}>1</button>
                <button onClick={myfun2}>2</button>
                <button onClick={myfun3}>3</button>
            </div>
        </div>
    );
};

export default Test;
