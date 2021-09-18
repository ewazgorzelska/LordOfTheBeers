import React from "react";
import Button from "components/atoms/Button/Button";
import {
  ProductCardContainer,
  ImageWrapper,
  ProductWrapper,
  ProductName,
} from "./ProductCardStyles";
import { data } from "data/data";

const productName = data[0].name;

const ProductCard = () => {
  return (
    <ProductCardContainer id={data[0].id}>
      <ProductWrapper>
        <ProductName>{productName}</ProductName>
        <ImageWrapper />
        <div>$ 1.00</div>
        <Button isBig>Add to cart</Button>
      </ProductWrapper>
    </ProductCardContainer>
  );
};

export default ProductCard;
