import React from "react";
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
          <a href="#">
            <span>App-Manager</span>
          </a>
        </li>
        <li className="Sidebar_list-component">
          <a href="#">
            <i className="fas fa-mobile-alt"></i>
            <span>Applications</span>
          </a>
        </li>
        <li className="Sidebar_list-component">
          <a href="#">
            <i className="fas fa-user"></i>
            <span>Users</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
