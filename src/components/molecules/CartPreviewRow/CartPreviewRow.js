import React from "react";
import styled from "styled-components";
import noPhoto from "assets/no-photo.jpg";

const CartPreviewRowWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 3vh;
`;
export const ProductImage = styled.div`
  width: 6vw;
  height: 10vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;
export const ProductName = styled.div``;

export const Price = styled.div``;

export const Separator = styled.div`
  border-bottom: 1px solid black;
  width: 80%;
`;

const CartPreviewRow = ({ id, image, name, price, quantityInCart }) => {
  return (
    <CartPreviewRowWrapper id={id}>
      <ProductImage image={image ? image : noPhoto} />
      <ProductName>{name}</ProductName>
      <div>{price} $</div>
      <div>{quantityInCart}</div>
    </CartPreviewRowWrapper>
  );
};

export default CartPreviewRow;
