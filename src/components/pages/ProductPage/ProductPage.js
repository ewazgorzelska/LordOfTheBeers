import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "context/AppContext";
import {
  ProductContainer,
  Image,
  ProductNameWrapper,
  ProductDescription,
  Title,
  Food,
  ProductPrice,
  StyledButton,
  ButtonWrapper,
} from "./ProductPageStyles";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductQuantity from "components/molecules/ProductQuantity/ProductQuantity";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  let { id } = useParams();

  const productName = products.find((el) => el.id.toString() === id).name;
  const productImage = products.find((el) => el.id.toString() === id).image_url;

  const productTagline = products.find((el) => el.id.toString() === id).tagline;
  const productDescription = products.find(
    (el) => el.id.toString() === id
  ).description;
  const foodPairing = products.find(
    (el) => el.id.toString() === id
  ).food_pairing;

  return (
    <MainTemplate>
      <ProductContainer>
        {productImage ? <Image src={productImage} alt="beer" /> : null}
        <ProductNameWrapper>
          <Title>{productName}</Title>
          <h2>{productTagline}</h2>
          <ProductPrice>$1.00</ProductPrice>
          <ButtonWrapper>
            <ProductQuantity isBig />
            <StyledButton isBig>Add to cart</StyledButton>
          </ButtonWrapper>
        </ProductNameWrapper>
        <ProductDescription>
          <Title>Description</Title>
          <p>{productDescription}</p>
          <Title>Food Pairing</Title>
          <ul>
            {foodPairing.map((el) => (
              <Food key={el}>{el}</Food>
            ))}
          </ul>
        </ProductDescription>
      </ProductContainer>
    </MainTemplate>
  );
};

export default ProductPage;
