import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We are happy to answer your questions and assist with reservations.</p>
      </div>

      {/* MAIN GRID */}
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-info">

          <h2>Reach Out To Us</h2>

          <div className="info-block">
            <h4>Restaurant address</h4>
            <p>📍Ao Nang, Mueang Krabi District, Krabi 81000, Thailand</p>
            <p>📧 motimahal@gmail.com</p>
            <p>📞 +66 2327-3073</p>
          </div>

          <div className="info-block">
            <h4>Hours of Operation</h4>
            <p>🕒 Sunday    : 11:00 AM – 11:30 PM</p>
            <p>🕒 Monday    : 11:00 AM – 11:30 PM</p>
            <p>🕒 Tuesday   : 11:00 AM – 11:30 PM</p>
            <p>🕒 Wednesday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Thursday  : 11:00 AM – 11:30 PM</p>
            <p>🕒 Friday    : 11:00 AM – 11:30 PM</p>
            <p>🕒 Saturday  : 11:00 AM – 11:30 PM</p>
            
            <small>(Hours may vary on occasions)</small>
          </div>

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.641823664064!2d98.81882089999999!3d8.035814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051c00bce63ba23%3A0xb89f3585ba32403a!2sMoti%20Mahal!5e0!3m2!1sen!2sin!4v1768380665785!5m2!1sen!2sin"
              title="Moti Mahal"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* RIGHT */}
        <div className="contact-form ">

          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />

            <select>
              <option>Reservation Inquiry</option>
              <option>Franchise Opportunity</option>
              <option>General Feedback</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Submit Inquiry</button>

           
          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;
