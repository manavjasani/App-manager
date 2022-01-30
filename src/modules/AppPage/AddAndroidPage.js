import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  createAndroidAction,
  updateAndroidAction,
} from "../../store/slice/appSlice";

const AddAndroidPage = ({ androidDetail }) => {
  console.log("androidDetail", androidDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  console.log("id", id);
  const { i } = params;
  console.log("i", i);

  const [titleVal, setTitleVal] = useState(
    androidDetail?.title ? androidDetail?.title : ""
  );
  const [descVal, setDescVal] = useState(
    androidDetail?.description ? androidDetail?.description : ""
  );
  const [minVers, setMinVers] = useState(
    androidDetail?.minVersion ? androidDetail?.minVersion : ""
  );
  const [curVers, setCurVers] = useState(
    androidDetail?.curVersion ? androidDetail?.curVersion : ""
  );
  const [versName, setVersName] = useState(
    androidDetail?.versionName ? androidDetail?.versionName : ""
  );
  const [url, setUrl] = useState(androidDetail?.url ? androidDetail?.url : "");

  const titleValChangeHandler = (e) => {
    setTitleVal(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDescVal(e.target.value);
  };

  const minVersChangeHandler = (e) => {
    setMinVers(e.target.value);
  };

  const curVersChangeHandler = (e) => {
    setCurVers(e.target.value);
  };

  const versNameChangeHandler = (e) => {
    setVersName(e.target.value);
  };

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const cancelBtnHandler = () => {
    navigate(-1);
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      platform: "Android",
      title: titleVal,
      description: descVal,
      minVersion: minVers,
      curVersion: curVers,
      versionName: versName,
      url: url,
    };
    console.log("data", data);
    {
      id && i
        ? dispatch(updateAndroidAction({ data, id, i }))
        : dispatch(createAndroidAction({ data, id: i }));
    }
    navigate(-1);
  };

  return (
    <div className="App-manager-main-content">
      <h2 className="user-head">
        {id ? "Edit Android Version" : "Add Android Version"}
      </h2>
      <div className="Create_user-page">
        <div className="Create_user-input">
          <label>Platform</label>
          <input type="text" defaultValue="Android" disabled />
        </div>
        <div className="Create_user-input">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Your Title here"
            value={titleVal}
            onChange={titleValChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Enter Your App Description"
            value={descVal}
            onChange={descChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Minimum Version</label>
          <input
            type="text"
            placeholder="Enter Your min version"
            value={minVers}
            onChange={minVersChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Current Version</label>
          <input
            type="text"
            placeholder="Enter Your current version"
            value={curVers}
            onChange={curVersChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Version Name</label>
          <input
            type="text"
            placeholder="Enter Your version name"
            value={versName}
            onChange={versNameChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Url</label>
          <input
            type="text"
            placeholder="Enter Your Url"
            value={url}
            onChange={urlChangeHandler}
          />
        </div>
        <div className="btn-container">
          {id ? (
            <button
              className="comman-btn"
              onClick={(e) => userSubmitHandler(e)}
            >
              Update
            </button>
          ) : (
            <button
              className="comman-btn"
              onClick={(e) => userSubmitHandler(e)}
            >
              Submit
            </button>
          )}
          <button className="comman-btn" onClick={cancelBtnHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAndroidPage;
