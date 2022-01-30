import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getIosDetailAction } from "../../store/slice/appSlice";
import AddIosPage from "./AddIosPage";

const EditIosPage = () => {
  const params = useParams();
  const { id } = params;
  console.log("id", id);
  const { i } = params;
  console.log("i", i);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const iosDetail = useSelector((state) => state.apps.iosDetail);
  console.log("iosDetail", iosDetail);

  useEffect(() => {
    if (!iosDetail && id) {
      dispatch(getIosDetailAction({ id, i }));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, id, iosDetail]);

  if (isLoading) {
    return <div />;
  }

  return (
    <div>
      <AddIosPage iosDetail={iosDetail} />
    </div>
  );
};

export default EditIosPage;
