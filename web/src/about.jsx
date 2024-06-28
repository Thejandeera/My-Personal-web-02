import React from 'react';
import ProfileImage from './assets/my2.jpg'; // Use the same image or a different one
import NavigationBar from "./navigationBar";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <NavigationBar/>
      <section className="about-hero-section">
        <img src={ProfileImage} alt="Your Name" className="profile-image-about" />
        <div className="bio">
          <h1>About Me</h1>
          <p className="about-para1">Hello! I'm an undergraduate student at SLIIT pursuing a B.Sc. (Hons.) in Computer Science. I'm passionate about developing innovative web applications and constantly learning new technologies. All my projects are published in the Projects section. You can also check them out!</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Thejandeera" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/dasun.bob.7?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
          </a>
          </div>
        </div>
      </section>
      <section className="professional-section">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <h3>Undergraduate of SLIIT</h3>
            <p>Engaged in developing innovative web applications utilizing React and Node.js. Worked alongside a team of developers to produce robust and efficient software solutions.</p>          </li>
          <li>
            <h3>Freelance Web Developer</h3>
            <p>Worked with various clients to create dynamic and responsive websites. Specialized in front-end development using HTML, CSS, and JavaScript.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
