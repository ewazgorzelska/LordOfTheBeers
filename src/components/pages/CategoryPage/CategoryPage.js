import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import {
  CategoryContainer,
  CategoryLinksWrapper,
  StyledButton,
  CategoryProducts,
  Title,
} from "./CategoryPageStyles";
import { Loading, Error } from "components/pages/Blog/BlogStyles";
import noPhoto from "assets/no-photo.jpg";
import { AppContext } from "context/AppContext";

const CategoryPage = ({ productsError }) => {
  
  const { products } = useContext(AppContext);
  let { id } = useParams();

  const blondes = products.filter((el) => el.ebc <= 16);
  const browns = products.filter((el) => el.ebc >= 16 && el.ebc < 39);
  const darks = products.filter((el) => el.ebc > 39);
  const strongs = products.filter((el) => el.abv > 7);
  const nonAlcoholic = products.filter((el) => el.abv < 3);

  const categories = [
    { id: "1", name: "all", beers: products },
    { id: "2", name: "blondes", beers: blondes },
    { id: "3", name: "browns", beers: browns },
    { id: "4", name: "darks", beers: darks },
    { id: "5", name: "strongs", beers: strongs },
    { id: "6", name: "non-alcoholic", beers: nonAlcoholic },
  ];

  const chosenCat = id ? categories.find((el) => el.id === id).beers : products;

  return (
    <MainTemplate>
      <CategoryContainer>
        <CategoryLinksWrapper>
          {categories.map(({ id, name }) => (
            <Link key={id} to={`/category/${id}`}>
              <StyledButton id={id} isBig>
                {name}
              </StyledButton>
            </Link>
          ))}
        </CategoryLinksWrapper>
        <Title>
          {id ? categories.find((el) => el.id === id).name : categories[0].name}
        </Title>
        {products.length > 0 ? (
          <CategoryProducts>
            {chosenCat.map(({ id, name, image_url }) => (
              <ProductCard
                isBig
                key={id}
                id={id}
                name={name}
                image_url={image_url ? image_url : noPhoto}
              />
            ))}
          </CategoryProducts>
        ) : productsError ? (
          <Error>error</Error>
        ) : (
          <Loading>Loading ...</Loading>
        )}
      </CategoryContainer>
    </MainTemplate>
  );
};

export default CategoryPage;
