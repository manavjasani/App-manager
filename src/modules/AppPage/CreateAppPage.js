import React from "react";
import { useNavigate } from "react-router";

const CreateAppPage = () => {
  const navigate = useNavigate();

  const userSubmitHandler = (e) => {
    e.preventDefault();
    console.log("**");
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
            // value={appNameVal}
            // onChange={appNameChangeHandler}
          />
          {/* {appNameErr && <span className="err-msg">{appNameErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Enter Yout App Description here"
            // value={appDescVal}
            // onChange={appDescChangeHandler}
          />
          {/* {appDescErr && <span className="err-msg">{appDescErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Platform</label>
          <select
            // value={platform.value}
            // onChange={platformChangeHandler}
            className="user_select"
          >
            <option value="ios">Ios</option>
            <option value="android">Android</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="Create_user-input">
          <label>Application Icon Url</label>
          <input
            type="text"
            placeholder="Enter Application Icon Url"
            // value={appIconVal}
            // onChange={appIconChangeHandler}
          />
          {/* {appIconErr && <span className="err-msg">{appIconErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Ios Url</label>
          <input
            type="text"
            placeholder="Enter Ios Url"
            // value={iosIconVal}
            // onChange={iosIconChangeHandler}
          />
          {/* {iosIconErr && <span className="err-msg">{iosIconErr}</span>} */}
        </div>
        <div className="Create_user-input">
          <label>Android Url</label>
          <input
            type="text"
            placeholder="Enter Android Url"
            // value={androidIconVal}
            // onChange={androidIconChangeHandler}
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
