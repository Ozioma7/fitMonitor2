// frontend/src/pages/Home.js
import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FitMonitor</h1>
      <h1></h1>
      <h1>Monitor Your Way to a Healthier You</h1>
      <p>This is the homepage of FitMonitor, a comprehensive health and fitness tracking application.</p>
      <p>Start Your Fitness Journey Today</p>
      <div className="button-container">
        <button>GET STARTED</button>
        <button>LEARN MORE</button>
      </div>
    
      <ul className="navbar-links"></ul>
      <div>
        <h1>WHAT WE DO</h1>
        <p>Key Features:</p>
        <p>Track Any Activity: From gym sessions to outdoor runs and yoga sessions, log all your activities with ease.</p>
        <p>Set Achievable Goals: Define your fitness goals and let FitMonitor keep you accountable every step of the way.</p>
        <p>Stay Motivated: Visualize your progress with insightful charts and receive personalized insights to keep you motivated.</p>
        <p>Join a Community: Connect with fellow fitness enthusiasts, share your achievements, and embark on challenges together.</p>
        
      </div>
      {/* Add more content as needed */}
    </div>
  
  );
};

export default Home;
