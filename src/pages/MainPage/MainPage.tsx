import React, { Component, ContextType } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Loading from '../../components/Loading/Loading';
import getPlanets from '../../api/getPlanets';
import getSearch from '../../api/getSearch';

class MainPage extends Component<Record<string, never>> {
  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  async componentDidMount(): Promise<void> {
    if (this.context.searchValue === '') {
      const allPlanets = await getPlanets();
      console.log('allPlanets', allPlanets.results);
      this.context.setArrRes(allPlanets.results);
      this.context.setIsLoading(false);
    } else {
      const getSearchRes = await getSearch(this.context.searchValue);
      this.context.setArrRes(getSearchRes.results);
      console.log('cards', this.context.arrRes);
      this.context.setIsLoading(false);
    }
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
