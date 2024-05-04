import React from 'react';
import './bookCard.css';

const Test = () => {

    return (
        <>
            <div class="book">
                <div class="cover">
                    <p>Hover to open</p>
                    <h2>CSS Only <br/><span>Book</span></h2>
                    <p>@parth.webdev</p>
                </div>
                <div class="content">
                    <p>Source code on <br/>my <strong>GitHub!</strong></p>
                    <p>Link in comments ↓</p>
                </div>
            </div>
        </>
    );
}

export default Test;