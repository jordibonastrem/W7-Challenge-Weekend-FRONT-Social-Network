import actionTypes from "../actions/actionTypes";

const userListReducer = (users = [], action) => {
  let newUsersState;

  switch (action.type) {
    case actionTypes.getUsers:
      newUsersState = [...action.users];
      break;
    default:
      newUsersState = users;
      return;
  }

  return newUsersState;
};

export default userListReducer;
