import React, { Component } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { SearchProvider } from '../../context/SearchContext/SearchContext';

class MainPage extends Component<Record<string, never>> {
  render(): JSX.Element {
    return (
      <SearchProvider>
        <main className="main-page">
          <TopSection />
          <MainSection />
        </main>
      </SearchProvider>
    );
  }
}

export default MainPage;
