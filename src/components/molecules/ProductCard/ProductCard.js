import React from "react";
import Button from "components/atoms/Button/Button";
import {
  ProductCardContainer,
  ImageWrapper,
  ProductWrapper,
  ProductName,
} from "./ProductCardStyles";

const ProductCard = ({ id, name, image_url }) => {
  return (
    <ProductCardContainer id={id}>
      <ProductWrapper>
        <ProductName>{name}</ProductName>
        <ImageWrapper image_url={image_url} />
        <div>$ 1.00</div>
        <Button isBig>Add to cart</Button>
      </ProductWrapper>
    </ProductCardContainer>
  );
};

export default ProductCard;
