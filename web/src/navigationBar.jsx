import React, { useState } from 'react';
import './NavigationBar.css';


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav-icon" onClick={toggleNav}>
        {isOpen ? '✖' : '☰'}
      </div>
      {isOpen && (
       <>
        <ul className="nav-links">
          <li><a href="Home">Home 🌎</a></li>
          <li><a href="about">About 🙅‍♂️</a></li>
          <li><a href="projects">Projects 💻</a></li>
          <li><a href="education">Educations 👨‍🎓</a></li>
          <li><a href="contact">Contact me 📞</a></li>
        </ul>
        <p className="navibar-para1" >😄</p></>
        
      )}
    </div>
  );
};

export default NavigationBar;
