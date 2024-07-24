import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/Help.css';

const Help = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send feedback to backend)
    console.log('Feedback submitted');
    // Optionally, reset form fields after submission
    event.target.reset();
  };

  return (
    <div>
        {/* <ContentHeader/> */}
    <div className="help-container">
      <h1 className="help-title">Help Center</h1>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +1234567890</p>
        {/* Add more contact details as needed */}
      </div>

      {/* Feedback Form */}
      <div className="feedback-form">
        <h2>Give Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            placeholder="Your feedback..."
            name="feedback"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Help;
