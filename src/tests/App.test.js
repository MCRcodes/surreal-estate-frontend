import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  const headingElement = getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});
