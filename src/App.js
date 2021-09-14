import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "views/Blog/Blog";
import MainPage from "views/MainPage/MainPage";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "/graphql",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </ClientContext.Provider>
  );
}

export default App;
