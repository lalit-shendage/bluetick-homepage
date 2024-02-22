import React, { useState } from 'react';
import '../styles/ConnectSection.css';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="connect-section">
      <div className="container">
        <h2>Let's Connect</h2>
        <form onSubmit={handleSubmit} className="connect-form">
          <div className="form-group">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
          </div>
          <div className="form-group">
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default LetsConnect
