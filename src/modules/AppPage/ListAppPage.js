import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { clearAppDetailAction, getAppAction } from "../../store/slice/appSlice";

const ListAppPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apps = useSelector((state) => state.apps.getApps);
  console.log("apps", apps);

  useEffect(() => {
    console.log("abcd");
    dispatch(clearAppDetailAction());
    dispatch(getAppAction());
  }, []);

  const editButtonHandler = (id) => {
    navigate(`/applications/edit-application/${id}`);
  };

  return (
    <div className="App-manager-main-content">
      <div>
        <Link to="/create-application" className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add App</span>
        </Link>
      </div>
      <div className="user-list">
        {apps &&
          apps.map((item) => {
            return (
              <div key={item.id} className="user-list-component">
                {item.appIcon && (
                  <img
                    className="user-image"
                    src={item.appIcon}
                    alt="user"
                    width={50}
                    height={50}
                  />
                )}
                <span>{item.app}</span>
                <span>{item.appDesc}</span>
                <span>{item.platform}</span>
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

export default ListAppPage;
