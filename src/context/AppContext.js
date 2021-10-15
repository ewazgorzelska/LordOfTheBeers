import React, { createContext, useState } from "react";
import useCartPreview from "hooks/useCartPreview";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState("");
  const [products, setProducts] = useState([]);
  const { isCartPreviewOpened, handleCartPreview, offset } = useCartPreview();

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        products,
        setProducts,
        categoryClicked,
        setCategoryClicked,
        isCartPreviewOpened,
        handleCartPreview,
        offset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
