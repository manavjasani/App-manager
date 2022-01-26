import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createIosAction } from "../../store/slice/appSlice";

const AddIosPage = ({ iosDetail }) => {
  console.log("iosDetail", iosDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [titleVal, setTitleVal] = useState(
    iosDetail?.title ? iosDetail?.title : ""
  );
  const [descVal, setDescVal] = useState(
    iosDetail?.description ? iosDetail?.description : ""
  );
  const [minVers, setMinVers] = useState(
    iosDetail?.minVersion ? iosDetail?.minVersion : ""
  );
  const [curVers, setCurVers] = useState(
    iosDetail?.curVersion ? iosDetail?.curVersion : ""
  );
  const [versName, setVersName] = useState(
    iosDetail?.versionName ? iosDetail?.versionName : ""
  );
  const [url, setUrl] = useState(iosDetail?.url ? iosDetail?.url : "");

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
      platform: "Ios",
      title: titleVal,
      description: descVal,
      minVersion: minVers,
      curVersion: curVers,
      versionName: versName,
      url: url,
    };
    console.log("data", data);
    dispatch(createIosAction(data));
    navigate(-1);
  };

  return (
    <div className="App-manager-main-content">
      <h2 className="user-head">Add Ios Version</h2>
      <div className="Create_user-page">
        <div className="Create_user-input">
          <label>Platform</label>
          <input type="text" defaultValue="Ios" disabled />
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
          {/* {i ? (
            <>
              <button
                className="comman-btn"
                onClick={(e) => userSubmitHandler(e)}
              >
                Update
              </button>
              <button className="comman-btn" onClick={cancelBtnEditHandler}>
                Cancel
              </button>
            </>
          ) : ( */}
          <>
            <button
              className="comman-btn"
              onClick={(e) => userSubmitHandler(e)}
            >
              Submit
            </button>
            <button className="comman-btn" onClick={cancelBtnHandler}>
              Cancel
            </button>
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default AddIosPage;
