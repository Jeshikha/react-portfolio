import React from "react";
import "../pages/Contact.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or perform an action
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>

      {/* Contact Information */}
      <div className="contact-info">
        <p>Email: jess@designed.mu</p>
        <p>
          <a href="./pages/cv.pdf" target="_blank" rel="noopener noreferrer">
            Download my CV
          </a>
        </p>
        <p>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
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

