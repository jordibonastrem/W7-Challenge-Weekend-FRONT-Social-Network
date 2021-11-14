import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

let user;
beforeAll(() => {
  user = {
    username: "testuser",
    password: "testpassword",
  };
});

describe("Given a userReducer reducer", () => {
  describe("When it recieves a loginUser action", () => {
    test("Then  should return a new userState withthe property isAuthenticated to true", () => {
      const action = {
        type: actionTypes.loginUser,
        user: user,
      };

      const newUserState = userReducer(user, action);

      expect(newUserState).toHaveProperty("isAuthenticated", true);
    });
  });
});
