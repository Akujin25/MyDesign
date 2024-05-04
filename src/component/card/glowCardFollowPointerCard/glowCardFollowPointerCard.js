import React, { useEffect } from 'react';
import './glowCardFollowPointerCard.css';

const Test = () => {
    useEffect(() => {
        const cards = Array.from(document.querySelectorAll(".card"));
        const cardsContainer = document.querySelector("#cards");

        cardsContainer.addEventListener("mousemove", (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });
    })
    return (
        <>
            <div id="cards">
                <div className="card">
                    <div className="card-content">
                        <i className="fa-brands fa-instagram"></i>
                        <h2>Instagram</h2>

                        <p>Followers: <span>33K</span></p>

                        <a href="#">
                            <i className="fa-solid fa-link"></i>
                            <span>Follow me</span>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <i className="fa-brands fa-github"></i>
                        <h2>GitHub</h2>

                        <p>Followers: <span>330</span></p>

                        <a href="#">
                            <i className="fa-solid fa-link"></i>
                            <span>Follow me</span>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <i className="fa-brands fa-linkedin"></i>
                        <h2>Linkedin</h2>

                        <p>Followers: <span>550</span></p>

                        <a href="#">
                            <i className="fa-solid fa-link"></i>
                            <span>Follow me</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;