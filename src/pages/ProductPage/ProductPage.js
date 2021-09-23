import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "context/AppContext";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductQuantity from 'components/molecules/ProductQuantity/ProductQuantity';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  margin: 0 auto;
  width: 80vw;
  margin-bottom: 3em;
`;
const Image = styled.img`
  width: 10vw;
  height: 70vh;
  //border: 1px solid black;
  margin-top: 3em;
  justify-self: start;
`;

const ProductNameWrapper = styled.div`
  ///border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: stretch;
  align-self: center;
`;

const ProductDescription = styled.div`
  width: 60vw;
  //border: 1px solid black;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 800;
  margin: 1em 0 1em 0;
`;

const Food = styled.li`
  margin: 1em 0 1em 0;
`;

const ProductPrice = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  margin-top: 15px;
`;

const StyledButton = styled(Button)`
  height: 10vh;
  width: 12vw;
  font-size: 1em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 10px;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  //border: 1px solid black;
  align-items: center;
  gap: 3vw;
  margin-top: 5vh;
`;

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
          <ProductQuantity /> 
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
