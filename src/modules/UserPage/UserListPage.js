import React, { useEffect, useState } from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, getUserAction } from "../../store/slice/userSlice";

const UserListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [users, setUsers] = useState([])

  useEffect(() => {
    dispatch(clearUser());
    setTimeout(() => {
      dispatch(getUserAction());
    }, 100);
  }, [dispatch]);

  const getUser = useSelector((state) => state.user.getUsers);
  console.log("getUser", getUser);

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
        {getUser &&
          getUser.map((item) => {
            return (
              <div key={item.id} className="user-list-component">
                {item.image && (
                  <img
                    className="user-image"
                    src={item.image}
                    alt="user"
                    width={50}
                    height={50}
                  />
                )}
                <span>{item.name}</span>
                <span>{item.userRol}</span>
                <span>{item.email}</span>
                <button
                  onClick={() => editButtonHandler(item.id)}
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
