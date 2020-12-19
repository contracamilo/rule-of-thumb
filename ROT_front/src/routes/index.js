import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));

export default function Root() {
  return (
    <Suspense fallback={<div>{'...loading'}</div>}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}
