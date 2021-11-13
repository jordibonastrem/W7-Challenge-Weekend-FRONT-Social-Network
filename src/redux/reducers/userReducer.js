import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUserState;

  switch (action.type) {
    case actionTypes.loginUser:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    case actionTypes.logoutUser:
      newUserState = {
        isAuthenticated: false,
        user: {},
      };
      break;
    default:
      newUserState = user;
  }
  return newUserState;
};

export default userReducer;
