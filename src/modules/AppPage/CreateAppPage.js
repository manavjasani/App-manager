import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  appIconUploadAction,
  createAppAction,
  updateAppAction,
} from "../../store/slice/appSlice";

const CreateAppPage = ({ appDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { i } = params;

  const [appNameVal, setAppNameVal] = useState(
    appDetail?.app ? appDetail?.app : ""
  );
  const [appDescVal, setAppDescVal] = useState(
    appDetail?.appDesc ? appDetail?.appDesc : ""
  );
  const [platform, setPlatform] = useState(
    appDetail?.platform ? { value: appDetail?.platform } : { value: "Both" }
  );
  const [appIconVal, setAppIconVal] = useState(
    appDetail?.appIcon ? appDetail?.appIcon : ""
  );
  const [iosIconurl, setIosIconurl] = useState(
    appDetail?.iosIcon ? appDetail?.iosIcon : ""
  );
  const [androidIconurl, setAndroidIconurl] = useState(
    appDetail?.androidIcon ? appDetail?.androidIcon : ""
  );

  const appNameChangeHandler = (e) => {
    setAppNameVal(e.target.value);
  };
  const appDescChangeHandler = (e) => {
    setAppDescVal(e.target.value);
  };
  const platformChangeHandler = (e) => {
    setPlatform({ value: e.target.value });
  };
  const iconChangeHandler = (e) => {
    const appIcon = e.target.files[0];
    dispatch(
      appIconUploadAction({
        image: appIcon,
        cb: (uploadErr, uploadRes) => {
          if (uploadErr) {
            console.log("uploadErr", uploadErr);
          } else {
            setAppIconVal(uploadRes);
          }
        },
      })
    );
  };
  const iosIconChangeHandler = (e) => {
    setIosIconurl(e.target.value);
  };
  const androidIconChangeHandler = (e) => {
    setAndroidIconurl(e.target.value);
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      app: appNameVal,
      appDesc: appDescVal,
      platform: platform.value,
      appIcon: appIconVal,
      iosIcon: iosIconurl,
      androidIcon: androidIconurl,
    };
    console.log("data", data);

    {
      i
        ? dispatch(updateAppAction({ data, id: i }))
        : dispatch(createAppAction(data));
    }
    navigate("/applications");
  };

  const cancelBtnHandler = () => {
    navigate("/applications");
  };

  return (
    <div className="App-manager-main-content">
      <h2 className="user-head">
        {i ? "Edit Application" : "Add Application"}
      </h2>
      <div className="Create_user-page">
        <div className="Create_user-input">
          <label>Application Name</label>
          <input
            type="text"
            placeholder="Enter Application Name"
            value={appNameVal}
            onChange={appNameChangeHandler}
          />
          {/* {appNameErr && <span className="err-msg">{appNameErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Enter Yout App Description here"
            value={appDescVal}
            onChange={appDescChangeHandler}
          />
          {/* {appDescErr && <span className="err-msg">{appDescErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Platform</label>
          <select
            value={platform.value}
            onChange={platformChangeHandler}
            className="user_select"
          >
            <option value="ios">Ios</option>
            <option value="android">Android</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="Create_user-input">
          <label>Application Icon</label>
          <input
            type="file"
            accept="image/*"
            name="iconImage"
            className="image-input"
            onChange={iconChangeHandler}
          />
        </div>
        <div className="Create_user-input">
          <label>Ios Icon</label>
          <input
            type="text"
            name="iosUrl"
            value={iosIconurl}
            onChange={iosIconChangeHandler}
          />
          {/* {iosIconErr && <span className="err-msg">{iosIconErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Android Icon</label>
          <input
            type="text"
            name="androidUrl"
            value={androidIconurl}
            onChange={androidIconChangeHandler}
          />
          {/* {androidIconErr && <span className="err-msg">{androidIconErr}</span>} */}
        </div>

        <div className="btn-container">
          {i ? (
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

export default CreateAppPage;
