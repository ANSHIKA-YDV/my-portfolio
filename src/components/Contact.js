import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xeognkpq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(response => {
      if (response.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    }).catch(() => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary px-4">Send</button>
        </form>
      </div>
    </section>
  );
}
