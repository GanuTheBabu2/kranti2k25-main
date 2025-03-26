import React from "react";
import "./About.css";
import CollegeImage from "./Meenakshi-Sundararajan-Engineering-College-Chennai.png";
import KrantiImage from "./ka.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="section-header">
        <h1 className="about-title">About</h1>
        <div className="title-divider"></div>
      </div>

      {/* College Section */}
      <div className="about-container">
        <div className="about-image">
          <img 
            src={CollegeImage} 
            alt="Meenakshi Sundararajan Engineering College" 
            className="institution-image"
          />
        </div>
        <div className="about-content">
          <h1 className="institution-title"><b>Meenakshi Sundararajan Engineering College</b></h1>
          <p className="institution-description">
            Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. 
            This institution is a part of the prestigious KRS Group of Institutions which also includes the 
            renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late 
            Shri K.R.Sundararajan, the well-known Meenakshi College for Women, and the more recently established 
            Meenakshi Sundararajan School of Management. The institutions on the KRS Campus are known for the 
            quality education they impart and their stringent levels of discipline. We have consistently outshone 
            all our peers, not only in academics, but in co-curricular activities as well.
          </p>
        </div>
      </div>

      {/* Kranti Section */}
      <div className="about-container reverse-layout">
        <div className="about-image">
          <img 
            src={KrantiImage} 
            alt="Kranti 2K25" 
            className="kranti-image"
          />
        </div>
        <div className="about-content">
          <h2 className="kranti-title"><b>Kranti 2K25 – The Revolution in Technology</b></h2>
          <div className="kranti-description">
            <p>
              <span className="highlight">🚀 What is Kranti?</span><br />
              Kranti, meaning "Revolution," symbolizes transformation and innovation. Kranti 2K25 is a CSE symposium where brilliant minds push boundaries, challenge limits, and redefine the future of technology.
            </p>
            
            <p>
              <span className="highlight">⏳ Theme: Time Paradox</span><br />
              Step into the mysteries of time—loops, alternate realities, and temporal anomalies. This year's events challenge you to think beyond the present, reshape the past, and embrace the future.
            </p>
            
            <div className="challenge-questions">
              <p>💻 Can you debug an error before it happens?</p>
              <p>🕰 Can you pitch an idea that rewrites history?</p>
              <p>🔁 Can you code your way out of a time loop?</p>
            </div>
            
            <p className="call-to-action">
              The clock is ticking. Are you ready for the paradox?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;