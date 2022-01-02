import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/slice/loginSlice";
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      email: userName,
      password: password,
      returnSecureToken: true,
    };
    console.log("data", data);
    dispatch(loginAction(data));
  };

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
              value={userName}
              onChange={userNameHandler}
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
              value={password}
              onChange={passwordHandler}
            />
          </div>
        </div>
        <button className="Login-btn" onClick={loginHandler}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
