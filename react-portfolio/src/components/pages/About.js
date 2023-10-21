// src/components/About.js
import React from "react";
import backgroundImage from "../pages/back.jpg"; // Adjust the path to your image

const About = () => {
  const containerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "900px", // Set a minimum height to cover the entire viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background for content with some transparency
    color: "#fff", // Text color
    padding: "20px",
    textAlign: "center", // Center text horizontally
  };


  return (
    <div style={containerStyle}>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="bg-secondary p-4" style={contentStyle}>
          <h1>Jess Rama</h1>
          <p>
            I'm an aspiring web developer based in Birmingham, passionate about creating innovative and user-friendly web applications. I've recently embarked on my coding journey and am excited to learn and grow in the ever-evolving world of technology.
          </p>

          <div className="mt-3">
            <a href="https://www.linkedin.com/in/jessrama/" className="btn btn-primary me-2">
              LinkedIn
            </a>
            <a href="https://github.com/Jeshikha" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


