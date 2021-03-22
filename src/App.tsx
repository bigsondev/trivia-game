import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';

const Home = lazy(() => import('./modules/Home'));
const Quiz = lazy(() => import('./modules/Quiz'));

export const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/quiz" component={Quiz} />
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </StrictMode>
  );
};
