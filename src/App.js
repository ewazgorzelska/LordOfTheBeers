import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "views/Blog/Blog";
import MainPage from "views/MainPage/MainPage";
import Article from "components/organisms/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
