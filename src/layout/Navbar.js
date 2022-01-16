import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/loginSlice";
import "./Layout.css";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <ul className="Navbar_list">
        <li>
          <a onClick={toggle}>
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="Navbar_list-logout">
          <a href="/login" onClick={logoutHandler}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
