import React from 'react';
import './basicNavbar.css';


const Test = () => {


    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <i class="fa-solid fa-font-awesome"></i>
                    <a href="#">LOGO</a>
                </div>
                <div class="menu">
                    <div class="menu-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                    </div>
                    <button class="log-in">Log In</button>
                </div>
                <div class="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </>
    );
}

export default Test;