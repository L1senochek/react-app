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

  componentDidMount = async (): Promise<void> => {
    const { searchValue, setArrRes, setIsLoading } = this.context;
    if (searchValue === '') {
      const allPlanets = await getPlanets();
      setArrRes(allPlanets.results);
    } else {
      const getSearchRes = await getSearch(searchValue);
      setArrRes(getSearchRes.results);
    }
    setIsLoading(false);
  };

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
