import React from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import store from '@ProjectRedux/store';

import App from './App';
import queryClient from './service/queryClient';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;

if (container) {
  ReactDOM.createRoot(container).render(
    <React.Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </React.Fragment>,
  );
} 
 