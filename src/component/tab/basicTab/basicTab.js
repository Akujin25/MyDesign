import React, { useEffect } from 'react';
import './basicTab.css';

const Test = () => {

  useEffect(() => {
    const tabPanels = Array.from(document.querySelectorAll(".tab-panels > div"));
    const tabs = Array.from(document.querySelectorAll(".tab"));
    const tabsContainer = document.querySelector(".tab-menu");

    tabPanels.forEach((tab, index) => {
      if (index > 0) tab.setAttribute("hidden", "");
    });

    const switchTab = (e) => {
      // Find the clicked Tab
      const clickedTab = e.target.closest("li");
      if (!clickedTab) return;

      // Remove the "active" class from all Tabs
      tabs.forEach((tab) => tab.classList.remove("active"));
      // Add the "active" class to the clicked Tab
      clickedTab.classList.add("active");

      // Get the associated PANEL for the clicked tab
      const activePanelId = clickedTab.children[0].getAttribute("href");
      const activePanel = document.querySelector(activePanelId);

      // Hide all the Tab Panels
      tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", "");
      });
      // Show the panel associated with the clicked tab
      activePanel.removeAttribute("hidden", "");
    };

    tabsContainer.addEventListener("click", switchTab);
  })

  return (
    <>
      <div class="tab-container">

        <ul class="tab-menu">
          <li class="tab active"><a href="#technology">Technology</a></li>
          <li class="tab"><a href="#fitness">Fitness</a></li>
          <li class="tab"><a href="#food">Food</a></li>
          <li class="tab"><a href="#travel">Travel</a></li>
        </ul>

        <div class="tab-panels">
          <div id="technology" class="panel">
            <h3>The Future Awaits</h3>
            <p>Dive into the cutting-edge world of technology, where innovation meets functionality. Our tech tab explores groundbreaking advancements, dissects the latest gadgets, and provides thought-provoking discussions on the impact of technology on our daily lives.</p>
            <button>Learn</button>
          </div>

          <div id="fitness" class="panel">
            <h3>Unleash Your Potential</h3>
            <p>From high-intensity training to mindful practices, our fitness tab covers a wide range of exercises and wellness techniques. Gain access to personalized workout plans, nutritional guidance, and motivational stories to keep you on track.</p>
            <button>Get Fit</button>
          </div>

          <div id="food" class="panel">
            <h3>Flavor Explorations</h3>
            <p>Whether you're a seasoned chef or a novice in the kitchen, our food tab provides a treasure trove of culinary delights. Explore regional specialties, learn from renowned chefs, and discover the stories behind iconic dishes.</p>
            <button>Cook</button>
          </div>

          <div id="travel" class="panel">
            <h3>Explore the World</h3>
            <p>From ancient ruins to modern metropolises, our travel tab takes you on a journey through stunning landscapes, rich histories, and vibrant traditions. Unlock the secrets of each destination with local insights and expert recommendations.</p>
            <button>Explore Destinations</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Test;
