import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../../components/App";

jest.mock("react-facebook-login", () =>
  jest.fn(() => <div>Facebook login</div>)
);

test("renders correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
