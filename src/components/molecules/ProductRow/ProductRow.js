import React from "react";
import styled from "styled-components";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import { IoClose } from "react-icons/io5";

const ProductRowWrapper = styled.div`
  display: flex;
  align-items: center;
  //border: 1px solid grey;
  margin: 2em auto 2em auto;
  gap: 4em;
`;

const ProductImage = styled.div`
  width: 9vw;
  height: 10vh;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;
const ProductName = styled.div``;
const Price = styled.div``;
const RemoveButton = styled.button`
  width: 2vw;
  height: 4vh;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductRow = ({ id, image, name, unitPrice }) => {
  return (
    <ProductRowWrapper id={id}>
      <ProductImage image={image} />
      <ProductName>{name}</ProductName>
      <ProductQuantity />
      <Price>{unitPrice}$</Price>
      <RemoveButton>
        <IoClose />
      </RemoveButton>
    </ProductRowWrapper>
  );
};

export default ProductRow;
