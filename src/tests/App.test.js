import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders Surreal Estate Heading", () => {
  const { getByText } = render(<App />);

  const headingElement = getByText(/estate/i);
  expect(headingElement).toBeInTheDocument();
});
