import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

const props = {
  title: "2 bedroom period property",
  type: "Flat",
  bathrooms: "2",
  bedrooms: "2",
  price: "1000",
  city: "Manchester",
  email: "myemail@email.com",
};

// test("renders correctly", () => {
//   const { asFragment } = render(<PropertyCard />);

//   expect(asFragment()).toMatchSnapshot();
// });

test("displays a title", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const title = await findByText(props.title);

  expect(title.textContent).toBe(props.title);
});

test("displays a type with a location", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const typeAndCityText = `${props.type} - ${props.city}`;
  const typeAndLocationNode = await findByText(typeAndCityText);

  expect(typeAndLocationNode.textContent).toBe(typeAndCityText);
});

test("displays a number of bathrooms", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const bathroomsText = `Bathrooms: ${props.bathrooms}`;
  const bathroomsNode = await findByText(bathroomsText);

  expect(bathroomsNode.textContent).toBe(bathroomsText);
});

test("displays a number of bedrooms", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const bedroomsText = `Bedrooms: ${props.bedrooms}`;
  const bedroomsNode = await findByText(bedroomsText);

  expect(bedroomsNode.textContent).toBe(bedroomsText);
});

test("displays a price", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const priceText = `Price: £ ${props.price}`;
  const priceNode = await findByText(priceText);

  expect(priceNode.textContent).toBe(priceText);
});

test("can send an email", async () => {
  const { findByText } = render(<PropertyCard {...props} />);
  const email = await findByText("Email");

  expect(email.closest("a").href).toBe(`mailto:${props.email}`);
});
