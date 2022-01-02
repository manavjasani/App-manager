import React, { useState } from "react";
import "./Layout.css";

const Navbar = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const sideToggleHandler = () => {
    setSideToggle(!sideToggle);
  };

  return (
    <div className="Navbar">
      <ul className="Navbar_list">
        <li>
          <a onClick={sideToggleHandler}>
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="Navbar_list-logout">
          <a href="#">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
