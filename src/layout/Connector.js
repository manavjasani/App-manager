import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Connector.css";
import { Outlet } from "react-router";
// import UserListPage from "../modules/UserPage/UserListPage";

const Connector = () => {
  // useEffect(() => {
  //   localStorage.getItem("id");
  //   // const token = localStorage.getItem("token");
  // }, []);

  return (
    <>
      <div className="Main-page">
        <div>
          <Sidebar />
        </div>
        <div className="Main-page_secondary">
          <Navbar />
          <Outlet />
          {/* <UserListPage /> */}
        </div>
      </div>
    </>
  );
};

export default Connector;
