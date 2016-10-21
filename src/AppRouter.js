import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import App from 'App';
import Home from 'containers/Home';

const routes = (
    <Route
      path="/"
      component={App}
    >
        <IndexRoute
          component={Home}
        />
    </Route>
);

function AppRouter() {
    return (
        <Router history={browserHistory} routes={routes} />
    );
}

export default AppRouter;
