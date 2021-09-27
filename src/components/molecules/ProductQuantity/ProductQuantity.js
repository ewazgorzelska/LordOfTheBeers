import React, { useReducer } from "react";
import styled from "styled-components";

const ProductQuantityContainer = styled.div`
  height: 10vh;
  width: 12vw;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;

  input {
    width: 4vw;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  width: 4vw;
  height: 10vh;
  font-size: 2em;
  color: white;
  background-color: green;
  text-align: center;
`;

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
      <StyledButton onClick={() => dispatch({ type: "decrement" })}>
        -
      </StyledButton>
      <input type="text" value={quantity} readOnly />
      <StyledButton onClick={() => dispatch({ type: "increment" })}>
        +
      </StyledButton>
    </ProductQuantityContainer>
  );
};

export default ProductQuantity;
