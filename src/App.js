import React, { useEffect, useContext, useState } from "react";
import MainPage from "components/pages/MainPage/MainPage";
import CategoryPage from "components/pages/CategoryPage/CategoryPage";
import { AppContext } from "context/AppContext";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import AppProviders from "AppProviders/AppProviders";

function App() {
  const { setProducts } = useContext(AppContext);
  const [productsError, setProductsError] = useState("");

  useEffect(() => {
    const restLink = new RestLink({ uri: "https://api.punkapi.com/v2/" });

    const query = gql`
      query AllBeers {
        allBeers @rest(type: "Beer", path: "beers?page=3&per_page=80") {
          id
          name
          tagline
          description
          image_url
          abv
          ebc
          food_pairing
        }
      }
    `;

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: restLink,
    });

    client
      .query({ query })
      .then((response) => {
        setProducts(response.data.allBeers);
      })
      .catch(() => {
        setProductsError(`Sorry, we couldn't load products for you`);
      });
  }, [setProducts, setProductsError]);

  return (
    <AppProviders>
      <CategoryPage productsError={productsError} />
      <MainPage productsError={productsError} />
    </AppProviders>
  );
}

export default App;
