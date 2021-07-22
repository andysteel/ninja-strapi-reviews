import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Category from './pages/Category';
import Home from './pages/Home';
import ReviewDetails from './pages/ReviewDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/details/:id" component={ReviewDetails}></Route>
          <Route path="/category/:id" component={Category}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
