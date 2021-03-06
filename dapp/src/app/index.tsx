import * as React from 'react';
import { Route, Switch } from 'react-router';
import OpenColony from 'app/containers/OpenColony';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={OpenColony} />
  </Switch>
));
