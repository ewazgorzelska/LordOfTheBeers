import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "pages/Blog/Blog";
import MainPage from "pages/MainPage/MainPage";
import Article from "components/organisms/Article/Article";
import CategoryPage from "pages/CategoryPage/CategoryPage";
import ProductPage from "pages/ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/blog" component={Blog} />
        <Route path="/article/:id" component={Article} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
