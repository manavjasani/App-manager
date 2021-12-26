import React, { useEffect } from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, getUserAction } from "../../store/slice/userSlice";

const UserListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearUser());
    setTimeout(() => {
      dispatch(getUserAction());
    }, 100);
  }, [dispatch]);

  const getUser = useSelector((state) => state.user.getUsers);
  console.log("getUser", getUser);
  const users =
    getUser &&
    Object.entries(getUser).map(([key, value]) => ({
      key: key,
      value: value,
    }));
  console.log("users", users);

  const editButtonHandler = (i) => {
    navigate(`edit-user/${i}`);
  };

  return (
    <div className="App-manager-main-content">
      <div>
        <Link to="/create-user" className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add User</span>
        </Link>
      </div>
      <div className="user-list">
        {users &&
          users.map((item) => {
            return (
              <div key={item.key} className="user-list-component">
                <span>{item.value.name}</span>
                <span>{item.value.userRol}</span>
                <span>{item.value.email}</span>
                <button
                  onClick={() => editButtonHandler(item.key)}
                  className="edit-link"
                >
                  Edit
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserListPage;
