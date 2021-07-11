import { render, fireEvent, within, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { filterItems } from "../../constants/filterItems";
import { sortItems } from "../../constants/sortItems";
import App from "./index";

test("should order products by price", () => {
  render(<App />);
  const productGridChildren = screen.getByTestId("product-grid").childNodes;

  // Price ascending
  userEvent.selectOptions(
    screen.getByLabelText("Order by:"),
    sortItems.ASCENDING
  );

  expect(productGridChildren[0].textContent).toContain("15");
  expect(productGridChildren[1].textContent).toContain("20");
  expect(productGridChildren[2].textContent).toContain("22");
  expect(productGridChildren[3].textContent).toContain("25");
  expect(productGridChildren[4].textContent).toContain("30");
  expect(productGridChildren[5].textContent).toContain("35");
  expect(productGridChildren[6].textContent).toContain("50");

  // Price descending
  userEvent.selectOptions(
    screen.getByLabelText("Order by:"),
    sortItems.DESCENDING
  );

  expect(productGridChildren[0].textContent).toContain("50");
  expect(productGridChildren[1].textContent).toContain("35");
  expect(productGridChildren[2].textContent).toContain("30");
  expect(productGridChildren[3].textContent).toContain("25");
  expect(productGridChildren[4].textContent).toContain("22");
  expect(productGridChildren[5].textContent).toContain("20");
  expect(productGridChildren[6].textContent).toContain("15");
});

test("should sort items by size", () => {
  render(<App />);
  const productGridChildren = screen.getByTestId("product-grid").childNodes;

  // Small
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.S
  );
  expect(productGridChildren).toHaveLength(6);

  // Medium
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.M
  );
  expect(productGridChildren).toHaveLength(4);

  // Large
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.L
  );
  expect(productGridChildren).toHaveLength(5);

  // X Large
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.XL
  );
  expect(productGridChildren).toHaveLength(4);
});

test("should render the correct number of items currently being displayed", () => {
  render(<App />);

  expect(screen.getByTestId("number-of-items").textContent).toBe("7 items");

  // Small
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.S
  );
  expect(screen.getByTestId("number-of-items").textContent).toBe("6 items");

  // Medium
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.M
  );
  expect(screen.getByTestId("number-of-items").textContent).toBe("4 items");

  // Large
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.L
  );
  expect(screen.getByTestId("number-of-items").textContent).toBe("5 items");

  // X Large
  userEvent.selectOptions(
    screen.getByLabelText("Filter by size:"),
    filterItems.XL
  );
  expect(screen.getByTestId("number-of-items").textContent).toBe("4 items");
});

test("should render the number of items in the cart", () => {
  render(<App />);
  // no items in cart
  expect(screen.queryByTestId("items-in-cart")).not.toBeInTheDocument();

  // add 1 item to cart
  const firstProductButton = within(
    screen.getByTestId("product-100")
  ).getByTestId("cart-button");
  fireEvent.click(firstProductButton);
  expect(screen.getByTestId("items-in-cart").textContent).toBe("1");

  // add 2 items to cart
  const secondProductButton = within(
    screen.getByTestId("product-101")
  ).getByTestId("cart-button");
  fireEvent.click(secondProductButton);
  expect(screen.getByTestId("items-in-cart").textContent).toBe("2");
});

test("should add items to cart", () => {
  render(<App />);
  const cartButton = screen.getByTestId("open-cart-button");

  // add 1 item to cart
  const firstProductButton = within(
    screen.getByTestId("product-100")
  ).getByTestId("cart-button");
  fireEvent.click(firstProductButton);
  fireEvent.click(cartButton);

  expect(screen.getByTestId("cart-items").childNodes).toHaveLength(1);

  // add 2 items to cart
  const secondProductButton = within(
    screen.getByTestId("product-101")
  ).getByTestId("cart-button");
  fireEvent.click(secondProductButton);
  fireEvent.click(cartButton);

  expect(screen.getByTestId("cart-items").childNodes).toHaveLength(2);
});

test("should calculate total price of items in cart", () => {
  render(<App />);
  const cartButton = screen.getByTestId("open-cart-button");

  // add items to cart
  const firstProductButton = within(
    screen.getByTestId("product-100")
  ).getByTestId("cart-button");
  fireEvent.click(firstProductButton);
  fireEvent.click(cartButton);

  const secondProductButton = within(
    screen.getByTestId("product-101")
  ).getByTestId("cart-button");
  fireEvent.click(secondProductButton);
  fireEvent.click(cartButton);

  expect(screen.getByTestId("total-price").textContent).toBe(
    "Total Price: $75.00"
  );
});
