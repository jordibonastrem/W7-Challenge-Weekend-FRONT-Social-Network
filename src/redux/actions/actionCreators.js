import actionTypes from "./actionTypes";

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});
