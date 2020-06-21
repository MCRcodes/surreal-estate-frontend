import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "../../components/NavBar";

const renderComponent = () => {
  const { asFragment, getByAltText, getByText } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  return {
    fragment: asFragment(),
    logo: getByAltText("logo"),
    viewPropertiesLink: getByText("View Properties").closest("a"),
    addPropertyLink: getByText("Add Property").closest("a"),
  };
};

let component;

beforeEach(() => {
  component = renderComponent();
});

test("renders correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("it displays a logo", () => {
  expect(component.logo).toBeInTheDocument();
});

test("Properties links to /", () => {
  expect(component.viewPropertiesLink).toHaveAttribute("href", "/");
});

test("Add Property links to /add-property", () => {
  expect(component.addPropertyLink).toHaveAttribute("href", "/add-property");
});
