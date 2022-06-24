import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import Register from "./Register";

test("page title should be rendered", () => {
  render(<Register />);
  const pageTitle = screen.getByText(/CREATE AN ACCOUNT/i);
  expect(pageTitle).toBeInTheDocument();
});

test("firstname input should be rendered", () => {
  render(<Register />);
  const fnInputEl = screen.getByPlaceholderText(/first name/i);
  expect(fnInputEl).toBeInTheDocument();
});

test("lastname input should be rendered", () => {
  render(<Register />);
  const lnInputEl = screen.getByPlaceholderText(/last name/i);
  expect(lnInputEl).toBeInTheDocument();
});

test("email input should be rendered", () => {
  render(<Register />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("username input should be rendered", () => {
  render(<Register />);
  const unInputEl = screen.getByPlaceholderText(/username/i);
  expect(unInputEl).toBeInTheDocument();
});

test("firstname input should be rendered", () => {
  render(<Register />);
  const psInputEl = screen.getByPlaceholderText(/password/i);
  expect(psInputEl).toBeInTheDocument();
});

test("phone input should be rendered", () => {
  render(<Register />);
  const pnInputEl = screen.getByPlaceholderText(/phone/i);
  expect(pnInputEl).toBeInTheDocument();
});

test("birthday input should be rendered", () => {
  render(<Register />);
  const pnInputEl = screen.getByPlaceholderText(/birthday/i);
  expect(pnInputEl).toBeInTheDocument();
});

test("button input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

// All inputs should be empty at the begining
test("username input should be empty", () => {
  render(<Register />);
  const usernameEl = screen.getByDisplayValue(/username/i);
  expect(usernameEl.value).toBe("");
});

//...Add here other tests for this component
