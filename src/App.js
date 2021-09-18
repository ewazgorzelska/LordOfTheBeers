import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "pages/Blog/Blog";
import MainPage from "pages/MainPage/MainPage";
import Article from "components/organisms/Article/Article";
import CategoryPage from "pages/CategoryPage/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Article} />
        <Route path="/shop" component={CategoryPage} />
        <Route path="/shop/category/:id" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
