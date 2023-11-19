import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Router/Router';

const App = (): JSX.Element => {
  return <RouterProvider router={Router} />;
};

export default App;
