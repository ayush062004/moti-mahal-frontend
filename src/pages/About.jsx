import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero about-hero-fix d-flex align-items-center justify-content-center text-center">

        <div>
          <h1 className="display-3 fw-bold text-white">
            About Moti Mahal – Ao Nang
          </h1>
          <p className="lead text-white mt-3">
            Authentic Indian flavours in the heart of Ao Nang, Krabi
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="container-fluid py-5 px-5">
        <h2 className="text-danger fw-bold mb-4 display-5 text-center">
          Our Story
        </h2>

        <p className="text-muted fs-5 text-center mb-4">
          Moti Mahal, Ao Nang is a well-known Indian restaurant loved by travelers
          from around the world. Located close to the vibrant Ao Nang beach,
          we proudly serve authentic Indian cuisine along with Asian and Thai
          favourites.
        </p>

        <p className="text-muted fs-5 text-center">
          Our menu includes rich curries, freshly baked naan, vegetarian & vegan
          options, and comforting flavours that remind guests of home. With warm
          hospitality, great value, and consistently delicious food, Moti Mahal
          has become a must-visit dining spot in Krabi.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-fluid py-5 px-5 bg-light">
        <h2 className="text-danger fw-bold mb-5 display-5 text-center">
          Why Guests Love Us
        </h2>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Authentic Indian Taste</h5>
            <p className="text-muted">
              Traditional recipes, fresh ingredients, and bold flavours.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Friendly Service</h5>
            <p className="text-muted">
              Our staff ensures every guest feels welcome and comfortable.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Perfect Location</h5>
            <p className="text-muted">
              Easy to find, close to Ao Nang beach, and ideal for tourists.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
