import { StrictMode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store';

import { ErrorBoundary } from './ErrorBoundary';
import { Routes } from './Routes';

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes />
            </Suspense>
          </Router>
        </ErrorBoundary>
      </Provider>
    </StrictMode>
  );
};
