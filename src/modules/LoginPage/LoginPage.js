import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="Login-form">
      <div className="Login-form-component">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <div className="Input-container">
            <i className="fas fa-user"></i>
            <input
              className="Input"
              id="username"
              type="text"
              placeholder="Type your username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="Input-container">
            <i className="fas fa-lock"></i>
            <input
              className="Input"
              id="password"
              type="text"
              placeholder="Type your password"
            />
          </div>
        </div>
        <button className="Login-btn">LOGIN</button>
      </div>
    </div>
  );
};

export default LoginPage;
