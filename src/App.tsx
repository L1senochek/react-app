import React, { Component } from 'react';
import MainPage from './pages/MainPage/MainPage';
import { MainPageProvider } from './context/MainPageContext/MainPageContext';

class App extends Component {
  render = (): JSX.Element => {
    return (
      <>
        <MainPageProvider>
          <MainPage />
        </MainPageProvider>
      </>
    );
  };
}

export default App;
