import { StrictMode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import { store } from '@store';

import { ErrorBoundary } from './ErrorBoundary';
import { Layout } from './Layout';
import { Routes } from './Routes';

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <CssBaseline>
          <ErrorBoundary>
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                  <Routes />
                </Layout>
              </Suspense>
            </Router>
          </ErrorBoundary>
        </CssBaseline>
      </Provider>
    </StrictMode>
  );
};
