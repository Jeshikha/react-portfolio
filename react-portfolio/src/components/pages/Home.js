import React from "react";
import backgroundImage from "../pages/back.jpg"; // Adjust the path to your image

const Home = () => {
  const containerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "900px", // Set a minimum height to cover the entire viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const nameContainerStyle = {
    backgroundColor: `rgba(0, 0, 0, 0) !important`, // Background for name with some transparency
    color: "#fff", // Text color
    padding: "20px",
    textAlign: "center", // Center text horizontally
    fontFamily: "Arial, sans-serif", // Specify font-family for the name
  };

  const bioContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Background for bio with some transparency
    color: "#fff", // Text color
    padding: "20px",
    textAlign: "center", // Center text horizontally
    fontFamily: "Helvetica, sans-serif", // Specify font-family for the bio
  };

  const socialContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Background for social links with some transparency
    color: "#fff", // Text color
    padding: "20px",
    textAlign: "center", // Center text horizontally
  };

  return (
    <div style={containerStyle}>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="bg-secondary p-4" style={nameContainerStyle}>
          <h1>Jess Rama</h1>
        </div>
        <div className="bg-secondary p-4" style={bioContainerStyle}>
          <p>
            I'm an aspiring web developer based in Birmingham, passionate about creating innovative and user-friendly web applications. I've recently embarked on my coding journey and am excited to learn and grow in the ever-evolving world of technology.
          </p>
        </div>
        <div className="bg-secondary p-4" style={socialContainerStyle}>
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


