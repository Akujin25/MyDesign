import React, { useEffect } from 'react';
import './pointerToGlowText.css';


const Test = () => {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const links = document.querySelectorAll(".link");

        window.addEventListener("mousemove", (e) => {
            cursor.animate(
                {
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`,
                },
                {
                    duration: 500,
                    fill: "forwards",
                    easing: "ease",
                }
            );
        });

        links.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                cursor.classList.add("expand");
            });

            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("expand");
            });
        });
    });

    return (
        <>
            <div class="cursor"></div>

            <nav class="nav">
                <ul>
                    <li>
                        <a href="#" class="link" data-text="Home">Home</a>
                    </li>
                    <li>
                        <a href="#" class="link" data-text="Artists">Artists</a>
                    </li>
                    <li>
                        <a href="#" class="link" data-text="Collections">Collections</a>
                    </li>
                    <li>
                        <a href="#" class="link" data-text="Events">Events</a>
                    </li>
                    <li>
                        <a href="#" class="link" data-text="Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Test;