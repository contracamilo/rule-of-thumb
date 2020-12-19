import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));
const Main = React.lazy(() => import('../pages/main'));

export default function Root() {
  return (
    <Suspense fallback={<div>{'...loading'}</div>}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Suspense>
  );
}
