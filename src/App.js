import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useContext, useState} from 'react';
import Blog from "components/pages/Blog/Blog";
import MainPage from "components/pages/MainPage/MainPage";
import Article from "components/organisms/Article/Article";
import CategoryPage from "components/pages/CategoryPage/CategoryPage";
import ProductPage from "components/pages/ProductPage/ProductPage";
import { AppContext } from "context/AppContext";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

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
   
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/article/:id" component={Article} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/product/:id" component={ProductPage} />
          <CategoryPage productsError={productsError}/>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
