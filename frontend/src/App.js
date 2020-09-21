import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { history, store } from './redux/store';
import indexRoutes from './routes/index.routes';
import "antd/dist/antd.css";

const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          {
            indexRoutes.map((prop, key) => {
              return <Route
                path={prop.path}
                component={prop.component}
                key={key}
              />
            })
          }
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
