import React from "react";
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
import CartPreview from "components/organisms/CartPreview/CartPreview";
import { useGetProductsQuery } from "store/index.js";

const CategoryPage = () => {
  const { data, isError } = useGetProductsQuery();

  let { id } = useParams();

  const blondes = data.filter((el) => el.ebc <= 16);
  const browns = data.filter((el) => el.ebc >= 16 && el.ebc < 39);
  const darks = data.filter((el) => el.ebc > 39);
  const strongs = data.filter((el) => el.abv > 7);
  const nonAlcoholic = data.filter((el) => el.abv < 3);

  const categories = [
    { id: "1", name: "all", beers: data },
    { id: "2", name: "blondes", beers: blondes },
    { id: "3", name: "browns", beers: browns },
    { id: "4", name: "darks", beers: darks },
    { id: "5", name: "strongs", beers: strongs },
    { id: "6", name: "non-alcoholic", beers: nonAlcoholic },
  ];

  const chosenCat = id ? categories.find((el) => el.id === id).beers : data;

  return (
    <>
      <CartPreview />
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
            {id
              ? categories.find((el) => el.id === id).name
              : categories[0].name}
          </Title>
          {data.length > 0 ? (
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
          ) : isError ? (
            <Error>error</Error>
          ) : (
            <Loading>Loading ...</Loading>
          )}
        </CategoryContainer>
      </MainTemplate>
    </>
  );
};

export default CategoryPage;
