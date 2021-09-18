import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import { categories } from "data/data";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

const CategoryLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2.5em;
  margin-top: 3vh;
`;

const StyledButton = styled(Button)`
  width: 11vw;
  font-size: 1em;
`;

const CategoryProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vw;
  margin: 3vh;
`;

const CategoryPage = () => {
  return (
    <MainTemplate>
      <CategoryContainer>
        <CategoryLinksWrapper>
          {categories.map((cat) => (
            <StyledButton key={cat} isBig>
              {cat}
            </StyledButton>
          ))}
        </CategoryLinksWrapper>
        <CategoryProducts>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
          <ProductCard isBig/>
        </CategoryProducts>
      </CategoryContainer>
    </MainTemplate>
  );
};

export default CategoryPage;
