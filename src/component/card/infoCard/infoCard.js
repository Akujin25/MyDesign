import React from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import svg from '../../../assets/home.svg';
import './infoCard.css';

const Test = () => {


  return (
    <>
      <div class="container">
        <div class="blog-card">
          <div class="blog-image">
            <img src={doraemon} alt="" />
          </div>
          <div class="blog-content">
            <div class="published">
              <svg xmlns={svg} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <p>21 Oct, 2023</p>
            </div>
            <h3 class="title">Responsive Blog Card with Flexbox</h3>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus voluptatum repellendus debitis! Est voluptatum deserunt consequuntur ullam rerum provident.</p>
            <div class="info">
              <div class="tags">
                <p class="tag">HTML</p>
                <p class="tag">CSS</p>
              </div>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
