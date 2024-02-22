import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="overlay"></div>
      <div className="container">
        <h3>Transforming Enterprises</h3>
        <h4>with cutting-edge, scalable, privacy-focused Generative AI Solutions</h4>
        <p>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.</p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html" className="btn">Know more...</a>
      </div>
    </section>
  );
};

export default HeroSection;
