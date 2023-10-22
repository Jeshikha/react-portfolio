import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./projectCard.css"; // Import the CSS file for custom styles
const projects = require('./projectsData.json');

const MyPortfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-page">
      <Carousel selectedItem={currentSlide} showThumbs={false}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Deployed Version
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub Repository
              </a>
              <img src={project.imageURL} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </Carousel>
      <div className="carousel-controls">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default MyPortfolio;
