import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.componente}
              exact
            />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
