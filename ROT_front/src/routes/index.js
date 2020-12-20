import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = React.lazy(() => import('../pages/home'));

export default function Root() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <Loader />
        </div>
      }
    >
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}
