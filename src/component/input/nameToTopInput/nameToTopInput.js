import React from 'react';
import './nameToTopInput.css';

const Test = () => {
    return (
        <>
            <div class="input-group">
                <input class="input" required autocomplete="off" type="text" name="username" id="username" />
                <label class="label" for="username">Username</label>
            </div>
        </>
    );
}

export default Test;