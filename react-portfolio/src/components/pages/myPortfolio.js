import React from "react";
import "../pages/projectCard.css";
const projects = require('./projectsData.json');

const MyPortfolio = () => {
    return (
      <div className="projects-page">
        <div className="project-row">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
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
        </div>
      </div>
    );
};

export default MyPortfolio;
