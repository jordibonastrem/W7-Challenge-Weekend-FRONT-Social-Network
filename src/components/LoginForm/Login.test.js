import LoginForm from "./Login";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testing-utils/renderWithProviders";

describe("Given a component LoginForm", () => {
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
