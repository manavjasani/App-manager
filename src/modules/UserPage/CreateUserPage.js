import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createUserAction, getUserAction } from "../../store/slice/userSlice";
import "./UserPage.css";

const CreateUserPage = () => {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [userRoleVal, setUserRoleVal] = useState({ value: "admin" });
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [cPasswordVal, setCPasswordVal] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameChangeHandler = (e) => {
    setNameVal(e.target.value);
    setNameErr("");
  };

  const [nameErr, setNameErr] = useState("");

  const emailChangeHandler = (e) => {
    setEmailVal(e.target.value);
    setEmailErr("");
  };

  const [emailErr, setEmailErr] = useState("");

  const userRoleChangeHandler = (e) => {
    setUserRoleVal({ value: e.target.value });
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  console.log("imagePreview", imagePreview);
  console.log("image", image);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
    setUserNameErr("");
  };

  const [userNameErr, setUserNameErr] = useState("");

  const passwordValChangeHandler = (e) => {
    setPasswordVal(e.target.value);
    setPasswordErr("");
  };

  const [passwordErr, setPasswordErr] = useState("");

  const cPasswordValChangeHandler = (e) => {
    setCPasswordVal(e.target.value);
    setCPasswordErr("");
  };

  const [cPasswordErr, setCPasswordErr] = useState("");
  const [err, setErr] = useState("");

  const formValid = () => {
    let isValid = false;

    if (!nameVal) {
      setNameErr("Name is required !");
    } else if (!emailVal) {
      setEmailErr("Email is required !");
    } else if (!userName) {
      setUserNameErr("User name is required !");
    } else if (!passwordVal) {
      setPasswordErr("Password is required !");
    } else if (!cPasswordVal) {
      setCPasswordErr("Confirm password is required !");
    } else if (passwordVal !== cPasswordVal) {
      setErr("Password & confirm password shold be same !");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    formValid();

    if (formValid()) {
      const data = {
        name: nameVal,
        email: emailVal,
        userRol: userRoleVal.value,
        image: image,
        userName: userName,
        password: passwordVal,
        conPassword: cPasswordVal,
      };

      console.log("data", data);
      dispatch(createUserAction(data));
      navigate("/");
    }
  };

  const cancelBtnHandler = () => {
    navigate("/");
  };

  return (
    <div className="App-manager-main-content">
      <h2 className="user-head">Add User</h2>
      <div className="Create_user-page">
        <div className="Create_user-input">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={nameVal}
            onChange={nameChangeHandler}
          />
          {nameErr && <span className="err-msg">{nameErr}</span>}
        </div>
        <div className="Create_user-input">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={emailVal}
            onChange={emailChangeHandler}
          />
          {emailErr && <span className="err-msg">{emailErr}</span>}
        </div>
        <div className="Create_user-input">
          <label>User Role</label>
          <select
            value={userRoleVal.value}
            onChange={userRoleChangeHandler}
            className="user_select"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="Create_user-input">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            name="userImage"
            className="image-input"
            onChange={imageChangeHandler}
          />
          {imagePreview && (
            <img
              className="user-image"
              src={imagePreview}
              width="100"
              height="100"
              alt="user_image"
            />
          )}
        </div>
        <div className="Create_user-input">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            value={userName}
            onChange={userNameChangeHandler}
          />
          {userNameErr && <span className="err-msg">{userNameErr}</span>}
        </div>
        <div className="Create_user-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={passwordVal}
            onChange={passwordValChangeHandler}
          />
          {passwordErr && <span className="err-msg">{passwordErr}</span>}
        </div>
        <div className="Create_user-input">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={cPasswordVal}
            onChange={cPasswordValChangeHandler}
          />
          {cPasswordErr && <span className="err-msg">{cPasswordErr}</span>}
        </div>
        {err && <span className="err-msg">{err}</span>}

        <div className="btn-container">
          <button className="comman-btn" onClick={(e) => userSubmitHandler(e)}>
            Submit
          </button>
          <button className="comman-btn" onClick={cancelBtnHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
