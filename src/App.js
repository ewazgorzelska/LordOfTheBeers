import React from "react";
import MainPage from "components/pages/MainPage/MainPage";
import CategoryPage from "components/pages/CategoryPage/CategoryPage";
import ProductPage from "components/pages/ProductPage/ProductPage";
import AppProviders from "AppProviders/AppProviders";

function App() {
  return (
    <AppProviders>
      <CategoryPage />
      <MainPage />
      <ProductPage />
    </AppProviders>
  );
}

export default App;
