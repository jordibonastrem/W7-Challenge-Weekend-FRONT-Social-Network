import actionTypes from "./actionTypes";

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});

export const getUsersAction = (users) => ({
  type: actionTypes.getUsers,
  users,
});
