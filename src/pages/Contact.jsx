import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "001dfecf-fd94-4fc2-b72f-669a5ddfb990");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setResult("");
      setShowPopup(true);   // ✅ Popup show
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We are happy to answer your questions and assist with reservations.</p>
      </div>

      <div className="contact-container">

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
            <p>🕒 Sunday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Monday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Tuesday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Wednesday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Thursday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Friday : 11:00 AM – 11:30 PM</p>
            <p>🕒 Saturday : 11:00 AM – 11:30 PM</p>
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

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />

            <select name="subject">
              <option>Reservation Inquiry</option>
              <option>Franchise Opportunity</option>
              <option>General Feedback</option>
              <option>Other</option>
            </select>

            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Submit Inquiry</button>
            <span className="form-result">{result}</span>
          </form>
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>✅ Successfully Submitted!</h3>
            <p>Thank you for contacting us. We will get back to you soon.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;
