import React from "react";
import { render } from "@testing-library/react";
import { AppContextProvider } from "context/AppContext";
import { BrowserRouter, Switch } from "react-router-dom";

export const renderWithProviders = (children) => {
  return render(
    <AppContextProvider>
      <BrowserRouter>
        <Switch>{children}</Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};
