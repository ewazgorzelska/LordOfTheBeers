import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [clicked, setClicked] = useState([]);

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        clicked,
        setClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
