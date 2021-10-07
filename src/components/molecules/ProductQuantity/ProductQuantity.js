import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductQuantityContainer,
  StyledButton,
} from "./ProductQuantityStyles";
import {
  updateQuantityIncrementation,
  updateQuantityDecrementation,
} from "store/index.js";

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

const ProductQuantity = ({ handlePassQuantity, quantityInCart, id }) => {
  const [quantity, dispatch] = useReducer(quantityReducer, 0);
  const dispatch_redux = useDispatch();
  const productsInCart = useSelector((state) => state.productsInCart);

  const isProductInCart = (id) => {
    return productsInCart.filter((el) => el.id === id);
  };

  const handleClick = (action, upDate) => {
    dispatch({ type: action });
    isProductInCart(id).length > 0
      ? dispatch_redux(upDate)
      : handlePassQuantity(quantity);
  };

  return (
    <ProductQuantityContainer>
      <StyledButton
        id={id}
        aria-label="decrementation"
        onClick={() =>
          handleClick("decrement", updateQuantityDecrementation({ id }))
        }
      >
        -
      </StyledButton>
      <input
        type="text"
        aria-label="quantity"
        value={quantityInCart ? quantityInCart : quantity}
        readOnly
      />
      <StyledButton
        id={id}
        onClick={() =>
          handleClick("increment", updateQuantityIncrementation({ id }))
        }
      >
        +
      </StyledButton>
    </ProductQuantityContainer>
  );
};

export default ProductQuantity;
