import axios from "axios";

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      user
    );
    if (res.status === 200) {
      console.log(res);
    }
  } catch (error) {
    throw new Error(error);
  }
};
