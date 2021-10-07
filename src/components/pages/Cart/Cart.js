import React from "react";
import { useSelector } from "react-redux";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Title } from "components/pages/CategoryPage/CategoryPageStyles";
import ProductRow from "components/molecules/ProductRow/ProductRow";
import { CartContainer, EmptyCartInfo } from "./CartStyles";

const Cart = () => {
  const productsInCart = useSelector((state) => state.productsInCart);

  return (
    <MainTemplate>
      <CartContainer>
        <Title>Your Cart</Title>
        <div>
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
        </div>
      </CartContainer>
    </MainTemplate>
  );
};

export default Cart;
