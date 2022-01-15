import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAppDetailAction } from "../../store/slice/appSlice";
import CreateAppPage from "./CreateAppPage";

const EditAppPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { i } = params;

  const [isLoading, setIsLoading] = useState(true);

  const appDetail = useSelector((state) => state.apps.appDetail);
  console.log("appDetail", appDetail);

  useEffect(() => {
    if (!appDetail && i) {
      dispatch(getAppDetailAction(i));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, appDetail, i]);

  if (isLoading) {
    return <div />;
  }

  return (
    <div>
      <CreateAppPage appDetail={appDetail} />
    </div>
  );
};

export default EditAppPage;
