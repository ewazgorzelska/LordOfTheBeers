import React from "react";
import styled from "styled-components";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import { Title } from "components/pages/CategoryPage/CategoryPageStyles";
import ProductRow from "components/molecules/ProductRow/ProductRow";
import { initialCart } from "data/data";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsWrapper = styled.div``;

const Cart = () => {
  return (
    <MainTemplate>
      <CartContainer>
        <Title>Your Cart</Title>
        <ProductsWrapper>
          {initialCart.map((el) => (
            <ProductRow
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.name}
              unitPrice={el.unitPrice}
              quantity={el.quantity}
            />
          ))}
        </ProductsWrapper>
      </CartContainer>
    </MainTemplate>
  );
};

export default Cart;
