import React from "react";
import { Link } from "react-router-dom";

const ListAppPage = () => {
  return (
    <div className="App-manager-main-content">
      <div>
        <Link to="/create-application" className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add App</span>
        </Link>
      </div>
    </div>
  );
};

export default ListAppPage;
