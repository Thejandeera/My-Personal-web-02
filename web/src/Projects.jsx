import NavigationBar from "./navigationBar";
import React from 'react';
import projectimage from './assets/ATCS.jpg';
import webimage from './assets/myweb.png';
import chatweb from './assets/chat.png';
import './Project.css';
import updatingsoon from './assets/updatingsoon.jpg'



function Projects() {
  const projectList = [
    {
      title: 'Project ATCS',
      description: 'Automated Vehicle Monitoring system.',
      link: 'https://lnkd.in/gbgiDE6F',
      image:projectimage
      
    },
    {
      title: 'My Personal web',
      description: 'My First Web page',
      link: 'https://lnkd.in/gbgiDE6F',
      image:webimage
    },
    {
      title: 'Chat Web',
      description: ' Excited to share my latest project! Built a chat web app from scratch using Express.js, MongoDB, Vite, and Tailwind CSS. Check it out and let me know what you think!',
      link: 'https://www.linkedin.com/posts/thejandeera-sandeepana-6baa17208_im-happy-to-share-this-chat-web-project-activity-7219626097158545409-cSrN?utm_source=share&utm_medium=member_androidp',
      image:chatweb
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
             <img src={project.image} alt={project.title} />
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
