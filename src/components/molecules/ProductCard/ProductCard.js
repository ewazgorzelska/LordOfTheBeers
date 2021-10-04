import React from "react";
import Button from "components/atoms/Button/Button";
import {
  ProductCardContainer,
  ImageWrapper,
  ProductWrapper,
  ProductName,
  StyledButton,
  ButtonWrapper,
} from "./ProductCardStyles";
import { Link } from "react-router-dom";

const ProductCard = ({ id, productsName, image_url }) => {

  return (
    <Link to={`/product/${id}`}>
      <ProductCardContainer>
        <ProductWrapper>
          <ProductName>{productsName}</ProductName>
          <ImageWrapper image_url={image_url} />
          <div>$ 1.00</div>
          <ButtonWrapper>
            <StyledButton isBig>Add to cart</StyledButton>
            <Button isBig>Preview</Button>
          </ButtonWrapper>
        </ProductWrapper>
      </ProductCardContainer>
    </Link>
  );
};

export default ProductCard;
