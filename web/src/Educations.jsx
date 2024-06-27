import React from 'react';
import NavigationBar from "./navigationBar";
import uniimage from './assets/uni.png';
import sclimage from './assets/bmmv.png';
import extra from './assets/extra.jpeg';
import './Education.css';

function Education() {
  const educationList = [
    {
      icon: '🎓',
      title: 'School',
      description: 'B/Haliela Central College and B/Bandarawela Central College',
      image: sclimage
    },
    {
      icon: '🏫',
      title: 'University ',
      description: 'B.Sc(hons) Computer Science in SLIIT',
      image: uniimage
    },
    {
      icon: '📚',
      title: 'Extra Curricular',
      description: 'Member of IEEE , Member of MS club',
      image: extra
    },
  ];

  return (
    <div className="education-container">
      <NavigationBar />
      <section className="education-hero-section">
        <h1>My Education</h1>
        <p>Explore my educational background and related professional experiences.</p>
      </section>
      <section className="education-list">
        {educationList.map((item, index) => (
          <div key={index} className="education-item">
            <img src={item.image} alt={item.title} className="education-image" />
            <div className="education-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p className="education-description" >{item.description}</p>
          </div>
        ))}
      </section>
      <section className="professional-education-section">
        <h2>Professional Experiences</h2>
        <ul>
          <li>
            <h3>Professional Experience One</h3>
            <p>Nothing yet...</p>
          </li>
          <li>
            <h3>Professional Experience Two</h3>
            <p>Nothing yet...</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Education;
