import React from 'react';
import './textBackgroundWhenHover.css';


const Test = () => {
    return (
        <>
            <nav id="menu">
                <ul class="menu-list">
                    <li>
                        <a href="#" data-text="Home">Home</a>
                    </li>
                    <li>
                        <a href="#" data-text="About">About</a>
                    </li>
                    <li>
                        <a href="#" data-text="Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#" data-text="Blog">Blog</a>
                    </li>
                    <li>
                        <a href="#" data-text="Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Test;