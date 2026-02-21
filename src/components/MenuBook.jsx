import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MenuBook.css";

/* 🔥 Import All 24 Images */
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
  const [size, setSize] = useState({ width: 600, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w < 768) {
        const mobileWidth = w - 30;

        setSize({
          width: mobileWidth,
          height: mobileWidth * 1.4
        });
      } else {
        const bookWidth = Math.min(w * 0.35, 500);

        setSize({
          width: bookWidth,
          height: bookWidth * 1.4
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="menu-wrapper">
      <HTMLFlipBook
        width={size.width}
        height={size.height}
        size="fixed"
        showCover={true}
        usePortrait={true}
        mobileScrollSupport={true}
        drawShadow={true}
        flippingTime={800}
        className="flipbook"
      >
        {pages.map((img, i) => (
          <div className="page" key={i}>
            <img src={img} alt={`Menu ${i + 1}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default MenuBook;