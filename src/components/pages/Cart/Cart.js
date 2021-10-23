import React from "react";
import { useSelector } from "react-redux";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Title } from "components/pages/CategoryPage/CategoryPageStyles";
import ProductRow from "components/molecules/ProductRow/ProductRow";
import {
  CartContainer,
  ProductsInCartWrapper,
  EmptyCartInfo,
} from "./CartStyles";

const Cart = () => {
  const productsInCart = useSelector((state) => state.productsInCart);

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
        </ProductsInCartWrapper>
      </CartContainer>
    </MainTemplate>
  );
};

export default Cart;
