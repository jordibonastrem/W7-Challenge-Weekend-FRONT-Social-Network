import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/thunks/userThunks";

const useUserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return {
    users,
    getUsers,
  };
};

export default useUserList;
