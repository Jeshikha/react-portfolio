import React from "react";
import "../pages/Home.css"; // Import the CSS file for custom styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="name-container">
          <h1 className="name-text">Jess Rama</h1>
        </div>
        <div className="bio-container">
          <p>
            I'm an aspiring web developer based in Birmingham, passionate about creating innovative and user-friendly web applications. I've recently embarked on my coding journey and excited to learn and grow in the ever-evolving world of technology.
          </p>
        </div>
        <div className="social-container">
          <p>Let's Connect and Stay tuned with my new projects!</p>
          <a href="https://www.linkedin.com/in/jessrama/" className="btn btn-primary me-2">
            LinkedIn
          </a>
          <a href="https://github.com/Jeshikha" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;




