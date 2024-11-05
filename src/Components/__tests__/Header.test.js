import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Home/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/Redux store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("src", "test-file-stub");

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent("Login");
});

it("should load header component with the cart having 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartElement = screen.getByText("Cart-(0)");
  // const cartElement = screen.getByText(/Cart/);
  expect(cartElement).toBeInTheDocument();
});

it("should change login button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const buttonElement = screen.getByRole("button", {name: "Login"});
  fireEvent.click(buttonElement);
  const changedButtonElement = screen.getByRole("button", {name: "Default User"});
  expect(changedButtonElement).toBeInTheDocument();
});