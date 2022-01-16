import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Connector.css";
import { Outlet } from "react-router";

const Connector = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="Main-page">
        <div>
          <Sidebar toggle={toggle} />
        </div>
        <div className="Main-page_secondary">
          <Navbar toggle={toggleMenu} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Connector;
