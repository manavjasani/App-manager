import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAndroidDetailAction } from "../../store/slice/appSlice";
import AddAndroidPage from "./AddAndroidPage";

const EditAndroidPage = () => {
  const params = useParams();
  const { id } = params;
  console.log("id", id);
  const { i } = params;
  console.log("i", i);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const androidDetail = useSelector((state) => state.apps.androidDetail);
  console.log("androidDetail", androidDetail);

  useEffect(() => {
    if (!androidDetail && id) {
      dispatch(getAndroidDetailAction({ id, i }));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, id, androidDetail]);

  if (isLoading) {
    return <div />;
  }

  return (
    <div>
      <AddAndroidPage androidDetail={androidDetail} />
    </div>
  );
};

export default EditAndroidPage;
