import React from "react";
import MenuBook from "../components/MenuBook";
import "../components/MenuBook.css";

const Menu = () => {
  return (
   <div className="container my-5 text-center" style={{ paddingTop: "10px" }}>
      <h1 className="menu-title">Our Menu</h1>
      <MenuBook />
    </div>
  );
};

export default Menu;