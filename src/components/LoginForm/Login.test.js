import LoginForm from "./Login";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testing-utils/renderWithProviders";
import userEvent from "@testing-library/user-event";

describe("Given a component LoginForm", () => {
  describe("When its rendered", () => {
    test("It should render a form with two inputs: username and password, and a button Login", () => {
      renderWithProviders(<LoginForm />);

      const usernameLabel = screen.getByLabelText("Username");
      const passwordLabel = screen.getByLabelText("Password");
      const buttontext = screen.getByText("Login");

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
      expect(buttontext).toBeInTheDocument();
    });
  });

  describe("If username input or password input are empty", () => {
    test("The button Login should be disabled", () => {
      renderWithProviders(<LoginForm />);
      const buttontext = screen.getByText("Login");
      expect(buttontext).toBeDisabled();
    });
  });

  describe("If username input and password input are not empty", () => {
    test("The button Login should be enabled", () => {
      renderWithProviders(<LoginForm />);
      const usernameInput = screen.getByPlaceholderText("Username");
      userEvent.type(usernameInput, "testUser");

      const passwordInput = screen.getByPlaceholderText("Password");
      userEvent.type(passwordInput, "testPassword");
      const buttontext = screen.getByText("Login");

      expect(buttontext).toBeEnabled();
    });
  });
});
