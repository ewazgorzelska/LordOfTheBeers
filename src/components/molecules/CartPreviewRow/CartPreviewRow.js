import React from "react";
import styled from "styled-components";
import noPhoto from "assets/no-photo.jpg";

const width = 6;

const CartPreviewRowWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 3vh;
`;
export const ProductImage = styled.div`
  width: ${width}vw;
  height: 10vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;
export const ProductName = styled.div`
  width: ${width*2}vw;
`;

export const Price = styled.div`
  width: ${width}vw;
`;

export const QuantityInCart = styled.div`
  width: ${width}vw;
`;

const CartPreviewRow = ({ id, image, name, price, quantityInCart }) => {
  return (
    <CartPreviewRowWrapper id={id}>
      <ProductImage image={image ? image : noPhoto} />
      <ProductName>{name}</ProductName>
      <Price>{price} $</Price>
      <QuantityInCart>{quantityInCart} btl</QuantityInCart>
    </CartPreviewRowWrapper>
  );
};

export default CartPreviewRow;
