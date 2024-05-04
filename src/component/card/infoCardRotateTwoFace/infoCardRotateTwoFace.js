import React from 'react';
import './infoCardRotateTwoFace.css';

const Test = () => {


    return (
        <>
            <div class="card">
                <div class="card-content">
                    <div class="card-front">
                        <p class="sub-title">DC Universe</p>
                        <h1 class="title">The Flash</h1>
                        <p class="sub-title">2023</p>
                    </div>

                    <div class="card-back">
                        <div class="back-title">The Flash</div>
                        <div class="movie-description">
                            <span>Synopsis: </span>The Flash travels through time to prevent the murder of his mother, but unwittingly causes changes that result in the creation of a multiverse.
                        </div>
                        <div class="genre">
                            <span>Genre: </span>Action, Adventure, Sci-Fi
                        </div>
                        <div class="release-date">
                            <span>Release Date: </span>16 June, 2023
                        </div>
                        <a href="https://www.youtube.com/watch?v=hebWYacbdvc" class="btn">Watch Trailer</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;
