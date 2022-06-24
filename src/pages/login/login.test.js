import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("page title should be rendered", () => {
  render(<Login />);
  const titleText = screen.getByText(/sign in/i);
  expect(titleText).toBeInTheDocument();
});

test("email input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText(/email/i);
  expect(emailInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});
