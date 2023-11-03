import React from 'react';
import { MainPageProvider } from './context/MainPageContext/MainPageContext';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Router/Router';

const App = (): JSX.Element => {
  return (
    <>
      <MainPageProvider>
        <RouterProvider router={Router} />
      </MainPageProvider>
    </>
  );
};

export default App;
