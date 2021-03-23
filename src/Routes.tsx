import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('@modules/home'));
const Quiz = lazy(() => import('@modules/quiz'));

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/quiz" component={Quiz} />
  </Switch>
);
