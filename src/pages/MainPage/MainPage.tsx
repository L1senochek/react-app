import React, { Component } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';

class MainPage extends Component {
  render(): JSX.Element {
    return (
      <main className="main-page">
        <TopSection />
        <MainSection />
      </main>
    );
  }
}

export default MainPage;
