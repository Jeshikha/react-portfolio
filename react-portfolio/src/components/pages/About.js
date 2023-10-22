import React from "react";
import profileImage from "../pages/me.jpeg"; // Importing profile picture
import "../pages/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <div className="about-content">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="description-section">
          <p>
            "I am currently pursuing front-end Web development certificate at the University of Birmingham. My passion lies in web development, and I am actively learning and building web applications. I aspire to become a proficient full-stack developer and contribute to innovative and user-friendly projects."
          </p>
        </div>
        <div className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: HTML, CSS, JavaScript</li>
            <li>Libraries / Frameworks: jQuery, React.js, Express.js, Bootstrap</li>
            <li>Other Technologies: Node.js, APIs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;



