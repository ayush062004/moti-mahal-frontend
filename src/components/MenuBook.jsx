import React from "react";
import "./MenuBook.css";

/* Import All 24 Images */
import page1 from "../assets/menu/Pic1.jpg";
import page2 from "../assets/menu/Pic2.jpg";
import page3 from "../assets/menu/Pic3.jpg";
import page4 from "../assets/menu/Pic4.jpg";
import page5 from "../assets/menu/Pic5.jpg";
import page6 from "../assets/menu/Pic6.jpg";
import page7 from "../assets/menu/Pic7.jpg";
import page8 from "../assets/menu/Pic8.jpg";
import page9 from "../assets/menu/Pic9.jpg";
import page10 from "../assets/menu/Pic10.jpg";
import page11 from "../assets/menu/Pic11.jpg";
import page12 from "../assets/menu/Pic12.jpg";
import page13 from "../assets/menu/Pic13.jpg";
import page14 from "../assets/menu/Pic14.jpg";
import page15 from "../assets/menu/Pic15.jpg";
import page16 from "../assets/menu/Pic16.jpg";
import page17 from "../assets/menu/Pic17.jpg";
import page18 from "../assets/menu/Pic18.jpg";
import page19 from "../assets/menu/Pic19.jpg";
import page20 from "../assets/menu/Pic20.jpg";
import page21 from "../assets/menu/Pic21.jpg";
import page22 from "../assets/menu/Pic22.jpg";
import page23 from "../assets/menu/Pic23.jpg";
import page24 from "../assets/menu/Pic24.jpg";

const pages = [
  page1, page2, page3, page4, page5, page6,
  page7, page8, page9, page10, page11, page12,
  page13, page14, page15, page16, page17, page18,
  page19, page20, page21, page22, page23, page24
];

function MenuBook() {
  return (
    <div className="container my-5">
      <div
        id="menuCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#menuCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {pages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100 menu-img"
                alt={`Menu ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default MenuBook;