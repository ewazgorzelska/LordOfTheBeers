import React, { createContext, useState } from "react";
import useCartPreview from "hooks/useCartPreview";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState("");
  const { isCartPreviewOpened, handleCartPreview, offset } = useCartPreview();

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
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
