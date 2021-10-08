import React, { useContext } from "react";
import Button from "components/atoms/Button/Button";
import { useDispatch } from "react-redux";
import {
  ProductCardContainer,
  ImageWrapper,
  ProductWrapper,
  ProductName,
  StyledButton,
  ButtonWrapper,
} from "./ProductCardStyles";
import { Link } from "react-router-dom";
import { addToCart } from "store/index.js";
import { AppContext } from "context/AppContext";

const ProductCard = ({ id, name, image_url }) => {
  const dispatch = useDispatch();
  const { handleCartPreview } = useContext(AppContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        image: image_url,
        name,
        price: 2.0,
        quantityInCart: 1,
      })
    );
    handleCartPreview();
  };

  return (
    <Link to={`/product/${id}`}>
      <ProductCardContainer>
        <ProductWrapper>
          <ProductName>{name}</ProductName>
          <ImageWrapper image_url={image_url} />
          <div>$ 1.00</div>
          <ButtonWrapper>
            <Button isBig onClick={handleAddToCart}>
              Add to cart
            </Button>
            <StyledButton isBig>Preview</StyledButton>
          </ButtonWrapper>
        </ProductWrapper>
      </ProductCardContainer>
    </Link>
  );
};

export default ProductCard;
