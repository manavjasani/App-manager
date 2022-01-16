import React from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.svg";
import { useLocation } from "react-router";
import "./Layout.css";

const Sidebar = ({ toggle }) => {
  const location = useLocation();
  const path = location.pathname;

  if (toggle) {
    return (
      <div className="Sidebar_toggle">
        <ul>
          <li className="Sidebar_list-head">
            <div className="Sidebar_img_container">
              <img src={userImg} alt="user_logo" />
            </div>
            {/* <Link to="/dashboard">
              <span>App-Manager</span>
            </Link> */}
          </li>
          <li
            className={`Sidebar_list-component ${
              path.includes("dashboard") ? "sidebar_name_active" : ""
            }`}
          >
            <Link to="/dashboard">
              <i className="fas fa-columns"></i>
              {/* <span>Dashboard</span> */}
            </Link>
          </li>
          <li
            className={`Sidebar_list-component ${
              path.includes("application") ? "sidebar_name_active" : ""
            }`}
          >
            <Link to="/applications">
              <i className="fas fa-mobile-alt"></i>
              {/* <span>Applications</span> */}
            </Link>
          </li>
          <li
            className={`Sidebar_list-component ${
              path.includes("user") ? "sidebar_name_active" : ""
            }`}
          >
            <Link to="/users">
              <i className="fas fa-user"></i>
              {/* <span>Users</span> */}
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Sidebar">
      <ul>
        <li className="Sidebar_list-head">
          <div className="Sidebar_img_container">
            <img src={userImg} alt="user_logo" />
          </div>
          <Link to="/dashboard">
            <span>App-Manager</span>
          </Link>
        </li>
        <li
          className={`Sidebar_list-component ${
            path.includes("dashboard") ? "sidebar_name_active" : ""
          }`}
        >
          <Link to="/dashboard">
            <i className="fas fa-columns"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`Sidebar_list-component ${
            path.includes("application") ? "sidebar_name_active" : ""
          }`}
        >
          <Link to="/applications">
            <i className="fas fa-mobile-alt"></i>
            <span>Applications</span>
          </Link>
        </li>
        <li
          className={`Sidebar_list-component ${
            path.includes("user") ? "sidebar_name_active" : ""
          }`}
        >
          <Link to="/users">
            <i className="fas fa-user"></i>
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
