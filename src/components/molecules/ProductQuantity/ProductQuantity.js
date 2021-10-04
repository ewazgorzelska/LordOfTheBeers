import React, { useReducer } from "react";
import {
  ProductQuantityContainer,
  StyledButton,
} from "./ProductQuantityStyles";

function quantityReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state === 0 ? 0 : state - 1;
    default:
      return state;
  }
}

const ProductQuantity = () => {
  const [quantity, dispatch] = useReducer(quantityReducer, 0);

  return (
    <ProductQuantityContainer>
      <StyledButton
        aria-label="decrementation"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </StyledButton>
      <input type="text" aria-label="quantity" value={quantity} readOnly />
      <StyledButton onClick={() => dispatch({ type: "increment" })}>
        +
      </StyledButton>
    </ProductQuantityContainer>
  );
};

export default ProductQuantity;
