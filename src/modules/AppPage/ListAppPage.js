import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAppDetailAction, getAppAction } from "../../store/slice/appSlice";
import Loader from "../../components/Loading";

const ListAppPage = () => {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.apps.getApps);
  console.log("apps", apps);

  const loading = useSelector((state) => state.apps.loader);

  useEffect(() => {
    dispatch(clearAppDetailAction());
    dispatch(getAppAction());
  }, []);

  return (
    <div className="App-manager-main-content">
      <div>
        <Link to="/create-application" className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add App</span>
        </Link>
      </div>
      {loading && <Loader />}
      <div className="app-list">
        {apps &&
          apps.map((item) => {
            return (
              <Link
                to={`/applications/${item?.id}`}
                key={item.id}
                className="app-component"
              >
                <div className="app-list-component">
                  <div>
                    {item?.appIcon && (
                      <img
                        className="user-image"
                        src={item?.appIcon}
                        alt="user"
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                  <div className="app-list-disc">
                    <span>{item?.app}</span>
                    <span></span>
                    <span>
                      {item?.platform === "both"
                        ? "Android/Ios"
                        : item?.platform}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ListAppPage;
