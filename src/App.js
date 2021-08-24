import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Blog from 'views/Blog/Blog';
import MainPage from 'views/MainPage/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainTemplate />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
