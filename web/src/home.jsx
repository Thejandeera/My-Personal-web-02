import React, { useState, useEffect } from 'react';
import NavigationBar from "./navigationBar";
import Image from './assets/my.jpg';


function Home() {
  const [title, setTitle] = useState('Welcome to My Personal Website');
  const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {
    const titles = ['Welcome to My Personal Website', 'Thejandeera Sandeepana'];
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % titles.length;
      setScrollAnimation(true); // Trigger scroll animation
      setTimeout(() => setScrollAnimation(false), 1000); // Reset scroll animation after 1 second
      setTitle(titles[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="home-container">
        <div className="home">
          <section className="hero-section">
            <h1  className={`fade-in ${scrollAnimation ? 'scroll-animation' : ''}`}>{title}</h1>
            <p className="fade-in">Showcasing my journey and skills.</p>
            <button className="cta-button"  >Learn More</button>
            

            

          </section>
          <section className="about-section slide-in-left">
            <img src={Image} alt="Your Name" className="profile-image" />
            <div className="bio">
              <h2>About Me</h2>
              <p>Hello !! Im an undergraduate student at SLIIT on B.Sc.(Hons.)Computer Science. All my projects are published on Project Section. You can also check that out</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
