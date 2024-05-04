import React, { useEffect } from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import chaien from '../../../assets/chaien.jpg';
import nobita from '../../../assets/nobita.jpg';
import shizuka from '../../../assets/shizuka.jpg';
import suneo from '../../../assets/suneo.jpg';
import Swiper from 'swiper';
import './flashCard.css';

// need to import "swiper": npm install swiper to use Swiper
//<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

const Test = () => {

    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            direction: "horizontal",
            slidesPerView: 1,
            effect: "fade",
            loop: true,
            speed: 300,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    })
    return (
        <>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src={suneo} />
                        </div>
                        <div class="slide-content">
                            <h2>Macau</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ea aperiam esse quia deserunt beatae ratione minus iusto eligendi.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src={shizuka} />
                        </div>
                        <div class="slide-content">
                            <h2>Rome</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ea aperiam esse quia deserunt beatae ratione minus iusto eligendi.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src={nobita} />
                        </div>
                        <div class="slide-content">
                            <h2>Jaipur</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ea aperiam esse quia deserunt beatae ratione minus iusto eligendi.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src={chaien} />
                        </div>
                        <div class="slide-content">
                            <h2>Dubai</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ea aperiam esse quia deserunt beatae ratione minus iusto eligendi.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-image-wrapper">
                            <img src={doraemon} />
                        </div>
                        <div class="slide-content">
                            <h2>Barcelona</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam ea aperiam esse quia deserunt beatae ratione minus iusto eligendi.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </>
    );
}

export default Test;