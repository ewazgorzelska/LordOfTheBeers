import React from "react";
import { useSelector } from "react-redux";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Title } from "components/pages/CategoryPage/CategoryPageStyles";
import ProductRow from "components/molecules/ProductRow/ProductRow";
import {
  CartContainer,
  ProductsInCartWrapper,
  EmptyCartInfo,
  TotalPriceWrapper,
  TotalPriceTitle,
} from "./CartStyles";

const Cart = () => {
  const productsInCart = useSelector((state) => state.productsInCart);
  const total = useSelector((state) => state.totalPrice.value);

  return (
    <MainTemplate>
      <CartContainer>
        <Title>Your Cart</Title>
        <ProductsInCartWrapper productsInCart={productsInCart}>
          {productsInCart.length ? (
            productsInCart.map(({ id, image, name, price, quantityInCart }) => (
              <ProductRow
                key={id}
                id={id}
                image={image}
                name={name}
                unitPrice={price}
                quantityInCart={quantityInCart}
              />
            ))
          ) : (
            <EmptyCartInfo>No products in your cart yet</EmptyCartInfo>
          )}
          <TotalPriceWrapper>
            <TotalPriceTitle>Total:</TotalPriceTitle>
            <h2>{total} $</h2>
          </TotalPriceWrapper>
        </ProductsInCartWrapper>
      </CartContainer>
    </MainTemplate>
  );
};

export default Cart;
