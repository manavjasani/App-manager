import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar_list">
        <li>
          <a href="#">
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
