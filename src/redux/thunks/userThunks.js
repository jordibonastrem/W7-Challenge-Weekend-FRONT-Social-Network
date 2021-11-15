import axios from "axios";
import jwtDecode from "jwt-decode";
import { userPaths } from "../../paths/paths";
import { loginUserAction, getUsersAction } from "../actions/actionCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + userPaths.loginUser,
    user
  );

  if (res.status === 200) {
    const {
      data: { token },
    } = res;

    const user = jwtDecode(token);

    dispatch(loginUserAction(user));

    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_KEY,
      JSON.stringify({ token: token })
    );
  }
};

export const getUsersThunk = () => async (dispatch) => {
  // const { token } = JSON.parse(
  // //   localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
  // // );

  const { data: users } = await axios.get(
    process.env.REACT_APP_API_URL + userPaths.getUsers
  );

  dispatch(getUsersAction(users));

  // const response = await fetch(
  //   process.env.REACT_APP_API_URL + userPaths.getUsers,
  //   {
  //     method: "GET",
  //   }
  // );
  // const users = await response.json();

  // dispatch(getUsersAction(users));
};
