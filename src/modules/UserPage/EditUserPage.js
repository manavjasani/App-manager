import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUserAction, getUserDetail } from "../../store/slice/userSlice";
import CreateUserPage from "./CreateUserPage";

const EditUserPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const params = useParams();
  console.log("params", params);
  const { i } = params;

  const user = useSelector((state) => state.user.userDetail);
  console.log("users", user);

  useEffect(() => {
    if (!user && i) {
      dispatch(getUserDetail(i));
    } else {
      setIsLoading(false);
    }
  }, [dispatch, i, user]);

  if (isLoading) {
    return <div />;
  }

  return (
    <div>
      <CreateUserPage users={user} />
    </div>
  );
};

export default EditUserPage;
