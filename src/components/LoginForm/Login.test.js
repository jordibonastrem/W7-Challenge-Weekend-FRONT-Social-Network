import LoginForm from "./Login";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";

describe("Given a component LoginForm", () => {
  test("It should render a form with two inputs: username and password, and a button Login", () => {
    renderWithProviders(<LoginForm></LoginForm>);
  });
});
