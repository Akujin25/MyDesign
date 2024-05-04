import React from 'react';
import doraemon from '../../../assets/doraemon.jpg';
import nobita from '../../../assets/nobita.jpg';
import './loginBasic.css';

const Test = () => {
    return (
        <>
            <div class="container">
      <div class="header">
        <button class="close-button">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <a class="logo" href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div class="content">
        <h1>Log in to Twitter</h1>

        <div class="action-buttons">
          <button class="primary-button sign-in-button">
            <object data={doraemon}></object>
            <span>Sign in with Google</span>
          </button>
          <button class="primary-button sign-in-button">
            <object data={nobita}></object>
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div class="divider">
          <p>or</p>
        </div>

        <div class="email-log-in">
          <input type="text" id="log-in" placeholder="Email"/>
          <label for="log-in">Phone, email or username</label>
        </div>

        <div class="action-buttons">
          <button class="primary-button">Next</button>
          <button class="secondary-button">Forgot Password?</button>
        </div>
      </div>
      <div class="sign-up">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
        </>
    );
}

export default Test;