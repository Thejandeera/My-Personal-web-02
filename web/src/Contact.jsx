import React from 'react';
import NavigationBar from "./navigationBar";
import './Contact.css'; // Make sure to create and import the CSS file
import contactImage from './assets/my2.jpg'; // Import your contact image

function Contact() {
  return (
    <div className="contact-container">
      <NavigationBar />
      <section className="contact-hero-section">
        <img src={contactImage} alt="Contact" className="contact-image" />
        <h1>Contact Me 📞</h1>
        <p className="contact-para">Contact me , if you have any problem or anything to report ..</p>
      </section>
      <section className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
      <section className="contact-details-section">
        <h2>Contact Details 📝</h2>
        <p>Email: thejan1010@gmail.com 📧</p>
        <p>Phone: 071-8860959 📞</p>
        <p>Location: Badulla, Srilanka 📍</p>
      </section>
    </div>
  );
}

export default Contact;
