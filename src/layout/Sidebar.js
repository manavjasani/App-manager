import React from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li className="Sidebar_list-head">
          <div className="Sidebar_img_container">
            <img src={userImg} alt="user_logo" />
          </div>
          <Link to="/">
            <span>App-Manager</span>
          </Link>
        </li>
        <li className="Sidebar_list-component">
          <Link to="/users">
            <i className="fas fa-mobile-alt"></i>
            <span>Applications</span>
          </Link>
        </li>
        <li className="Sidebar_list-component">
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
