import React, { useContext, useEffect } from "react";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import { categories } from "data/data";
import {
  CategoryContainer,
  CategoryLinksWrapper,
  StyledButton,
  CategoryProducts,
} from "./CategoryPageStyles";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { gql } from "@apollo/client";
import { AppContext } from "context/AppContext";
import { Link } from "react-router-dom";

const CategoryPage = ({ id, name, image_url }) => {
  const { products, setProducts, setCategoryClicked } = useContext(AppContext);

  useEffect(() => {
    const restLink = new RestLink({ uri: "https://api.punkapi.com/v2/" });

    const query = gql`
      query AllBeers {
        allBeers @rest(type: "Beer", path: "beers/") {
          id
          name
          tagline
          description
          image_url
          abv
          ebc
          foodpairing
        }
      }
    `;

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: restLink,
    });

    client.query({ query }).then((response) => {
      setProducts(response.data.allBeers);
    });
  }, [setProducts]);

  const handleCat = (id) => {
    setCategoryClicked(id);
  };

  return (
    <MainTemplate>
      <CategoryContainer>
        <CategoryLinksWrapper>
          {categories.map((cat) => (
            <Link to={`shop/category/${id}`}>
              <StyledButton key={cat.id} id={cat.id} onClick={handleCat} isBig>
                {cat.name}
              </StyledButton>
            </Link>
          ))}
        </CategoryLinksWrapper>
        <CategoryProducts>
          {products.length > 0 &&
            products.map((beer) => (
              <ProductCard
                isBig
                key={beer.id}
                id={beer.id}
                name={beer.name}
                image_url={beer.image_url}
              />
            ))}
        </CategoryProducts>
      </CategoryContainer>
    </MainTemplate>
  );
};

export default CategoryPage;
