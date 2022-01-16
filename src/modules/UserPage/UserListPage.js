import React, { useEffect } from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, getUserAction } from "../../store/slice/userSlice";
import Loader from "../../components/Loading";

const UserListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.user.loader);
  console.log("loading", loading);

  useEffect(() => {
    dispatch(clearUser());
    dispatch(getUserAction());
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
      {loading && <Loader />}
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
