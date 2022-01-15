import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  appIconUploadAction,
  createAppAction,
} from "../../store/slice/appSlice";

const CreateAppPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [appNameVal, setAppNameVal] = useState("");
  const [appDescVal, setAppDescVal] = useState("");
  const [platform, setPlatform] = useState({ value: "Both" });
  const [appIconVal, setAppIconVal] = useState("");
  const [iosIconVal, setIosIconVal] = useState("");
  const [androidIconVal, setAndroidIconVal] = useState("");

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
    const iosIcon = e.target.files[0];
    dispatch(
      appIconUploadAction({
        image: iosIcon,
        cb: (uploadErr, uploadRes) => {
          if (uploadErr) {
            console.log("uploadErr", uploadErr);
          } else {
            setIosIconVal(uploadRes);
          }
        },
      })
    );
  };
  const androidIconChangeHandler = (e) => {
    const androidIcon = e.target.files[0];
    dispatch(
      appIconUploadAction({
        image: androidIcon,
        cb: (uploadErr, uploadRes) => {
          if (uploadErr) {
            console.log("uploadErr", uploadErr);
          } else {
            setAndroidIconVal(uploadRes);
          }
        },
      })
    );
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      app: appNameVal,
      appDesc: appDescVal,
      platform: platform.value,
      appIcon: appIconVal,
      iosIcon: iosIconVal,
      androidIcon: androidIconVal,
    };
    console.log("data", data);
    dispatch(createAppAction(data));
    navigate("/applications");
  };

  const cancelBtnHandler = () => {
    navigate("/applications");
  };

  return (
    <div className="App-manager-main-content">
      <h2 className="user-head">Add Application</h2>
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
            type="file"
            accept="image/*"
            name="iosImage"
            className="image-input"
            onChange={iosIconChangeHandler}
          />
          {/* {iosIconErr && <span className="err-msg">{iosIconErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Android Icon</label>
          <input
            type="file"
            accept="image/*"
            name="androidImage"
            className="image-input"
            onChange={androidIconChangeHandler}
          />
          {/* {androidIconErr && <span className="err-msg">{androidIconErr}</span>} */}
        </div>

        <div className="btn-container">
          {/* {i ? (
            <button
              className="comman-btn"
              onClick={(e) => userSubmitHandler(e)}
            >
              Update
            </button>
          ) : ( */}

          <button className="comman-btn" onClick={(e) => userSubmitHandler(e)}>
            Submit
          </button>
          <button className="comman-btn" onClick={cancelBtnHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAppPage;
