import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        products,
        setProducts,
        categoryClicked,
        setCategoryClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
