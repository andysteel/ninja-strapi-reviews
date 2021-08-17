import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CategoryStream from './pages/Category';
import Home from './pages/Home';
import ReviewDetails from './pages/ReviewDetails';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/details/:id" component={ReviewDetails}></Route>
            <Route path="/category/:id" component={CategoryStream}></Route>
          </Switch>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
