import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "components/pages/Blog/Blog";
import MainPage from "components/pages/MainPage/MainPage";
import Article from "components/organisms/Article/Article";
import CategoryPage from "components/pages/CategoryPage/CategoryPage";
import ProductPage from "components/pages/ProductPage/ProductPage";
import Cart from "components/pages/Cart/Cart";
import { store } from "store";
import { Provider } from "react-redux";

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/article/:id" component={Article} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={Cart} />
          {children}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProviders;
