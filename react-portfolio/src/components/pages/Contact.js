// Contact.js

import React from "react";
import "../pages/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or perform an action
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>

      {/* Contact Information */}
      <div className="contact-info">
  <p>Email: jess@designed.mu</p>
  <p>
    <a href="https://docs.google.com/document/d/1YBNmdwlT6HextnST97R3AJ_yp9fdw7KwtmlXuxfyOAY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-button">
      Download my CV
    </a>
  </p>
  <p>
    <a href="https://github.com/Jeshikha" target="_blank" rel="noopener noreferrer" className="contact-button">
      GitHub Profile
    </a>
  </p>
  <p>
    <a href="https://www.linkedin.com/in/jessrama/" target="_blank" rel="noopener noreferrer" className="contact-button">
      LinkedIn Profile
    </a>
  </p>
</div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="john.doe@xyz.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Please type your message here..." />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
