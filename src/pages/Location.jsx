import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="location-page">
      <h1 className="location-title">Our Location</h1>

      <div className="map-wrapper">
        <iframe
          title="Moti Mahal Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.641823664064!2d98.81882089999999!3d8.035814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051c00bce63ba23%3A0xb89f3585ba32403a!2sMoti%20Mahal!5e0!3m2!1sen!2sin!4v1768380665785!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
