import actionTypes from "../actions/actionTypes";

const userListReducer = (users = [], action) => {
  let newUsersState = users;

  switch (action.type) {
    case actionTypes.getUsers:
      newUsersState = [...action.users];
      break;

    default:
  }

  return newUsersState;
};

export default userListReducer;
