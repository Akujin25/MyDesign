import React, {useEffect} from 'react';
import './filmCard.css';
import doraemon from '../../../assets/doraemon.jpg'
import nobita from '../../../assets/nobita.jpg'
import shizuka from '../../../assets/shizuka.jpg'
import suneo from '../../../assets/suneo.jpg'
import chaien from '../../../assets/chaien.jpg'

const Test = () => {

    useEffect(() => {
        const cardsContainer = document.querySelector(".container");

        cardsContainer.addEventListener("click", (e) => {
            const target = e.target.closest(".card");

            if (!target) return;

            cardsContainer.querySelectorAll(".card").forEach((card) => {
                card.classList.remove("active");
            });

            target.classList.add("active");
        });
    }, []);

    return (
        <>
            <div class="container">
                <div class="card">
                    <img class="background" src={doraemon} alt="" />

                    <div class="card-content">
                        <div class="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 class="title">doraemon</h3>
                    </div>
                    <div class="backdrop"></div>
                </div>

                <div class="card">
                    <img class="background" src={nobita} alt="" />

                    <div class="card-content">
                        <div class="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 class="title">nobita</h3>
                    </div>
                    <div class="backdrop"></div>
                </div>

                <div class="card">
                    <img class="background" src={shizuka} alt="" />

                    <div class="card-content">
                        <div class="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 class="title">shizuka</h3>
                    </div>
                    <div class="backdrop"></div>
                </div>

                <div class="card">
                    <img class="background" src={suneo} alt="" />

                    <div class="card-content">
                        <div class="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 class="title">suneo</h3>
                    </div>
                    <div class="backdrop"></div>
                </div>

                <div class="card">
                    <img class="background" src={chaien} alt="" />

                    <div class="card-content">
                        <div class="profile-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2">
                                <line x1="6" x2="10" y1="11" y2="11" />
                                <line x1="8" x2="8" y1="9" y2="13" />
                                <line x1="15" x2="15.01" y1="12" y2="12" />
                                <line x1="18" x2="18.01" y1="10" y2="10" />
                                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                            </svg>
                        </div>

                        <h3 class="title">chaien</h3>
                    </div>
                    <div class="backdrop"></div>
                </div>
            </div>
        </>
    );
}

export default Test;