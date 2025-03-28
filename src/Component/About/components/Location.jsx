import React from 'react';
import './Location.css'; 

function Location() {
  return (
    <section className="location-section">
      <h2 className="location-title">Our Location</h2>
      <p className="location-text">Find us on the map below:</p>
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.963757920901!2d80.22393577507789!3d13.055802687267342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f499eee457%3A0x4d3f7e677496e707!2sMeenakshi%20Sundararajan%20Engineering%20College!5e1!3m2!1sen!2sin!4v1742710337905!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
