import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isMessageSent, setIsMessageSent] = useState(false); // State to track message sent status

  const closeSuccessMessage = () => {
    setIsMessageSent(false);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when the user starts correcting them
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit function called'); 

    // Initialize newErrors as an empty object
    let newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form data:', formData);

      // Send the form data using EmailJS
      emailjs
        .sendForm('service_8meld89', 'template_qqx7fl8', e.target, 'nIr9Lrcs1oxkuXyFt')
        .then(
          (result) => {
            console.log('Email sent:', result.text);
            // Clear the form
            setFormData({ name: '', email: '', message: '' });
            // Set the message sent status to true
            setIsMessageSent(true);
          },
          (error) => {
            console.log('Email sending error:', error.text);
          }
        );
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send Message</button>
      </form>
      {/* Success message */}
      {isMessageSent && (
        <div className="success-message">
          <p>Message sent successfully!</p>
          <button onClick={closeSuccessMessage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
