import { loginUserAction, logoutUserAction } from "./actionCreators";
import actionTypes from "./actionTypes";

let user;
beforeAll(() => {
  user = {
    username: "testuser",
    password: "testpassword",
  };
});

describe("Given a loginUserAction", () => {
  describe("When it recieves a user", () => {
    test("Then it should return a object containing the actionType loginUser, and the user recieved", () => {
      const expectedOutput = {
        type: actionTypes.loginUser,
        user,
      };

      const result = loginUserAction(user);

      expect(result).toEqual(expectedOutput);
    });
  });
});

describe("Given a logoutUserAction", () => {
  describe("When it recieves a user", () => {
    test("Then it should return a object containing the actionType loginUser, and the user recieved", () => {
      const expectedOutput = {
        type: actionTypes.logoutUser,
        user,
      };

      const result = logoutUserAction(user);

      expect(result).toEqual(expectedOutput);
    });
  });
});
