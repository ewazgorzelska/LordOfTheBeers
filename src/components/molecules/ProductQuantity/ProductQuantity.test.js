import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductQuantity from "./ProductQuantity";

const setup = () => {
  const utils = render(<ProductQuantity />);
  const input = utils.getByLabelText("quantity");
  return {
    input,
    ...utils,
  };
};

describe("ProductQuantity", () => {
  it("increments the input's value", () => {
    const { input } = setup();
    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    expect(input.value).toBe("1");
  });
  it("decrements the input's value", () => {
    const { input } = setup();
    const minusButton = screen.getByText("-");
    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    expect(input.value).toBe("1");
    fireEvent.click(minusButton);
    expect(input.value).toBe("0");
  });
});
