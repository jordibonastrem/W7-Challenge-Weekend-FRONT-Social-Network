import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    user
  );

  if (res.status === 200) {
    const {
      data: { token },
    } = res;

    const user = jwtDecode(token);
    console.log(JSON.stringify(user));
    dispatch(loginUserAction(user));

    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_KEY,
      JSON.stringify({ token: token })
    );
  }
};
