import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { MainPageProvider } from './context/MainPageContext/MainPageContext';

const App = (): JSX.Element => {
  return (
    <>
      <MainPageProvider>
        <MainPage />
      </MainPageProvider>
    </>
  );
};

export default App;
