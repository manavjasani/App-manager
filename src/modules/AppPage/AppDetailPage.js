import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getAndroidAction,
  getAppDetailAction,
  getIosAction,
} from "../../store/slice/appSlice";

const AppDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { i } = params;

  const appDetail = useSelector((state) => state.apps.appDetail);
  // console.log("appDetail", appDetail);

  const iosDetail = useSelector((state) => state.apps.getIos);
  console.log("iosDetail", iosDetail);

  const androidDetail = useSelector((state) => state.apps.getAndroid);
  console.log("androidDetail", androidDetail);

  useEffect(() => {
    dispatch(getAppDetailAction(i));
  }, []);

  useEffect(() => {
    dispatch(getIosAction());
  }, []);

  useEffect(() => {
    dispatch(getAndroidAction());
  }, []);

  const editButtonHandler = (id) => {
    navigate(`/applications/edit-application/${id}`);
  };

  return (
    <div className="app-detail-cont">
      <div className="app-detail-back">
        <Link to="/applications" className="edit-link">
          Back
        </Link>
      </div>
      <div className="app-detail">
        <div className="app-img_cont">
          {appDetail?.appIcon && <img src={appDetail?.appIcon} />}
        </div>
        <div className="app-details">
          <div className="app-detail-header">
            <span className="app-name">{appDetail?.app}</span>
            <button
              onClick={() => editButtonHandler(i)}
              className="edit-link edit-app"
            >
              Edit
            </button>
          </div>
          <span>{appDetail?.appDesc}</span>
          <div className="app-url">
            <span>Ios : </span>
            <span>{appDetail?.iosIcon}</span>
          </div>
          <div className="app-url">
            <span>Android : </span>
            <span>{appDetail?.androidIcon}</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>Ios</span>
            <Link to={`/applications/${i}/add-ios`} className="add-btn">
              <i className="fas fa-plus"></i>
              <span>Add</span>
            </Link>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Version Name</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              {iosDetail?.map((item, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{item?.curVersion}</td>
                      <td>{item?.versionName}</td>
                      <td>{item?.title}</td>
                      <td>
                        <Link to={`/applications/${item?.id}/edit-ios`}>
                          <i className="fas fa-edit"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
        <div>
          <div>
            <span>Ios</span>
            <Link to={`/applications/${i}/add-android`} className="add-btn">
              <i className="fas fa-plus"></i>
              <span>Add</span>
            </Link>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Version Name</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              {androidDetail?.map((item, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{item?.curVersion}</td>
                      <td>{item?.versionName}</td>
                      <td>{item?.title}</td>
                      <td>
                        <Link to={`/applications/${item?.id}/edit-android`}>
                          <i className="fas fa-edit"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailPage;
