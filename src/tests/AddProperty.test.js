import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

const mountAndSelectField = (label) => {
  const { getByLabelText } = render(<AddProperty />);

  return getByLabelText(label);
};

const mockOnChange = (field, value) =>
  fireEvent.change(field, { target: { value } });

test("renders correctly", () => {
  const { asFragment } = render(<AddProperty />);

  expect(asFragment()).toMatchSnapshot();
});

describe("form fields", () => {
  test("title", () => {
    const title = mountAndSelectField("Title");

    mockOnChange(title, "A great home");

    expect(title.value).toBe("A great home");
  });

  test("city", () => {
    const city = mountAndSelectField("City");

    expect(city.value).toBe("Manchester");

    mockOnChange(city, "Leeds");

    expect(city.value).toBe("Leeds");
    expect(city.length).toBe(4);
  });

  test("type", () => {
    const type = mountAndSelectField("Type");

    mockOnChange(type, "Semi-Detatched");

    expect(type.value).toBe("Semi-Detatched");
    expect(type.length).toBe(7);
  });

  test("price", () => {
    const price = mountAndSelectField("Price");

    fireEvent.change(price, { target: { value: 100000 } });

    mockOnChange(price, 100000);

    expect(price.value).toBe("100000");
  });

  test("bedrooms", () => {
    const bedrooms = mountAndSelectField("Bedrooms");

    mockOnChange(bedrooms, 3);

    expect(bedrooms.value).toBe("3");
  });

  test("bathrooms", () => {
    const bathrooms = mountAndSelectField("Bathrooms");

    mockOnChange(bathrooms, 1);

    expect(bathrooms.value).toBe("1");
  });

  test("email", () => {
    const email = mountAndSelectField("Email");

    mockOnChange(email, "hello@mail.com");

    expect(email.value).toBe("hello@mail.com");
  });
});
