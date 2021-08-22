import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Blog from 'views/Blog/Blog';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainTemplate />
        <Switch>
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
