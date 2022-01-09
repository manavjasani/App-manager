import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/loginSlice";
import "./Layout.css";

const Navbar = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const dispatch = useDispatch();

  const sideToggleHandler = () => {
    setSideToggle(!sideToggle);
  };

  const logoutHandler = () => {
    dispatch(logout());
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
