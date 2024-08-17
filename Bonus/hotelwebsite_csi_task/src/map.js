import React from 'react';
import './map.css'; // Import the CSS file for styling

const MapWithOverlay = ({ mapSrc, location }) => {
  return (
    <div className="map-container">
    
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635503.6868974324!2d-1.283640376908297!3d51.52355741435191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1723839443063!5m2!1sen!2sin&z=14"
        title="Google Map"
        className="map-iframe"
        allowFullScreen
        loading="lazy"
      ></iframe>

 
      <div className="map-pointer"></div>

    
      <div className="overlay-box">
        <div className="location-details">
          <h2 className="location-title">Location of our Hotelos</h2>
          <p className="location-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <form className="contact-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="contact-button">Contact</button>
        </form>
      </div>
    </div>
  );
};

export default MapWithOverlay;
