import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import ErrorBoundary from './components/ErrorBoundler/ErrorBoundler';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
