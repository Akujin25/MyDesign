import React, { useEffect } from 'react';
import './darkLightButon.css';

const Test = () => {
    return (
        <>
            <div class="toggle-switch">
                <label class="slider">
                    <input type="checkbox" class="checkbox"/>
                        <span class="icon"></span>
                </label>
            </div>
        </>
    );
}

export default Test;