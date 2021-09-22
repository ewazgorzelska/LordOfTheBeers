import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "context/AppContext";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import MainTemplate from "templates/MainTemplate/MainTemplate";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Image = styled.img`
  width: 10vw;
  height: 70vh;
`;

const ProductNameWrapper = styled.div`

`;

const ProductDescription = styled.div`

`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

const Food = styled.p``;

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
          <div>$1.00</div>
          <Button isBig>Add to cart</Button>
          <ProductDescription>
          <Title>Description</Title>
          <p>{productDescription}</p>
          <Title>Food Pairing</Title>
          <p>{foodPairing.map(el=> <Food>{el}</Food>)}</p>
        </ProductDescription>
        </ProductNameWrapper>
      </ProductContainer>
    </MainTemplate>
  );
};

export default ProductPage;
