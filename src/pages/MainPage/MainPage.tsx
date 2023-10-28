import React, { Component, ContextType } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Loading from '../../components/Loading/Loading';

class MainPage extends Component<Record<string, never>> {
  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  componentDidUpdate() {
    console.log(this.context.isLoading, 555);
  }

  render(): JSX.Element {
    return (
      <main className="main-page">
        <TopSection />
        {this.context.isLoading ? <Loading /> : <MainSection />}
      </main>
    );
  }
}

export default MainPage;
