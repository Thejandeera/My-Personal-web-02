import NavigationBar from "./navigationBar";
import React from 'react';
import projectimage from './assets/ATCS.jpg';
import './Project.css';



function Projects() {
  const projectList = [
    {
      title: 'Project ATCS',
      description: 'Automated Vehicle Monitoring system.',
      link: 'https://github.com/yourprofile/project-one',
    },
    {
      title: 'Project Two',
      description: 'Coming soon...',
      link: 'https://github.com/yourprofile/project-two',
    },
    {
      title: 'Project Three',
      description: 'Coming soon...',
      link: 'https://github.com/yourprofile/project-three',
    },
  ];

  return (
    <div className="projects-container">
      <NavigationBar/>
      
      <section className="projects-hero-section">
        <h1>My Projects</h1>
        <p className="project-para1" >Explore the projects I have worked on. 💻 </p>
      </section>
      <section className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
             <img src={projectimage} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
              Learn More
            </a>
          </div>
        ))}
      </section>
      <section className="professional-projects-section">
        <h2>Professional Projects</h2>
        <ul>
          <li>
            <h3>Enterprise Web Application</h3>
            <p>Developed an enterprise web application for a major client using React, Node.js, and MongoDB.</p>
          </li>
          <li>
            <h3>Open Source Contributions</h3>
            <p>Contributed to several open-source projects, including bug fixes, new features, and documentation improvements.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
