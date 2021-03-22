import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('@modules/Home'));
const Quiz = lazy(() => import('@modules/Quiz'));

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/quiz" component={Quiz} />
  </Switch>
);
