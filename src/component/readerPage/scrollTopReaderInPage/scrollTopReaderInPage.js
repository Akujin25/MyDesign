import React, { useEffect } from 'react';
import './scrollTopReaderInPage.css';

const Test = () => {

    useEffect(() => {
        const progressBar = document.querySelector(".progress-bar");
        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrolled = (scrollTop / height) * 100;

            progressBar.style.width = `${scrolled}%`;
        });
    })

    return (
        <>
            <div class="scroll-indicator">
                <div class="progress-bar"></div>
            </div>

            <div class="container">
                <section>
                    <h1>Page Scroll Indicator</h1>
                    <p>A page scroll indicator is a visual cue displayed on a webpage to show users their current position on the page. It helps users understand how much content is left to view or how far they've scrolled down a webpage.</p>
                </section>
                <section>
                    <h1>What is HTML5 (HyperText Markup Language)?</h1>
                    <p>A page scroll indicator is a visual cue displayed on a webpage to show users their current position on the page. It helps users understand how much content is left to view or how far they've scrolled down a webpage.</p>
                </section>
                <section>
                    <h1>What is CSS3 (Cascading Style Sheets)?</h1>
                    <p>CSS3 is the style sheet language used for describing the presentation of a document written in HTML. It allows developers to control the layout, design, and appearance of web pages, enabling advanced styling features like animations, transitions, and responsive design for various devices.</p>
                </section>
                <section>
                    <h1>What is JavaScript?</h1>
                    <p>JavaScript is a versatile programming language used in web development to create interactive and dynamic user experiences. It powers functionalities such as form validations, DOM manipulation, asynchronous requests (AJAX), and is essential for many modern frameworks and libraries.</p>
                </section>
                <section>
                    <h1>What is React.js?</h1>
                    <p>React.js is a popular JavaScript library developed by Facebook. It's used for building user interfaces and offers a component-based architecture, enabling developers to create reusable UI components. React.js is known for its efficiency and flexibility in creating complex, interactive web applications.</p>
                </section>
                <section>
                    <h1>What is Svelte?</h1>
                    <p>Svelte is a relatively newer frontend framework that differs from traditional frameworks like React, Vue, or Angular. It's a component-based framework, but unlike others, it shifts the work from the browser to the build step. Svelte's approach is centered around compiling components into highly optimized JavaScript at build time, resulting in smaller bundle sizes and improved runtime performance.</p>
                </section>
                <section>
                    <h1>What is Next.js?</h1>
                    <p>Next.js is a React-based open-source framework used for building modern web applications. It enables server-side rendering (SSR) and static site generation (SSG) out of the box, providing improved performance and SEO benefits. Next.js simplifies React development by offering features like automatic code splitting, file-system-based routing, and API routes, making it easy to build production-ready applications.</p>
                </section>
            </div>
        </>
    );
}

export default Test;