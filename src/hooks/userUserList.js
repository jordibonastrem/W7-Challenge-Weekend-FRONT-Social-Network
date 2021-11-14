import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/thunks/userThunks";

const useUserList = () => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(getUsersThunk());
  };

  return {
    getUsers,
  };
};

export default useUserList;
