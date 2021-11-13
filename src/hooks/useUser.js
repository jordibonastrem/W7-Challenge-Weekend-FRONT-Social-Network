import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunks";
import { useCallback } from "react";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  return { user, loginUser };
};

export default useUser;
