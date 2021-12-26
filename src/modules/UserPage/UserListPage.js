import React, { useEffect } from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../store/slice/userSlice";

const UserListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const getUser = useSelector((state) => state.user.getUsers);
  const users = Object.values(getUser);
  console.log("users", users);

  return (
    <div className="App-manager-main-content">
      <div>
        <Link to="/create-user" className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add User</span>
        </Link>
      </div>
      <div>
        {users &&
          users.map((item, i) => {
            return (
              <div key={i}>
                <span>{item.name}</span>
                <span>{item.userRol}</span>
                <span>{item.email}</span>
                <Link to={`/edit-user/${i}`}>Edit</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserListPage;
