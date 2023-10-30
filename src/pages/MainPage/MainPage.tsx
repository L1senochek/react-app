import React, { useContext, useEffect } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Loading from '../../components/Loading/Loading';
import getPlanets from '../../api/getPlanets';
import getSearch from '../../api/getSearch';

const MainPage = (): JSX.Element => {
  const { searchValue, setArrRes, setIsLoading, isLoading } =
    useContext(MainPageContext);

  useEffect((): void => {
    (async (): Promise<void> => {
      if (searchValue === '') {
        const allPlanets = await getPlanets();
        setArrRes(allPlanets.results);
        console.log(1);
      } else {
        const getSearchRes = await getSearch(searchValue);
        setArrRes(getSearchRes.results);
        console.log(2);
      }
      setIsLoading(false);
    })();
  }, [searchValue, setArrRes, setIsLoading]);

  return (
    <main className="main-page">
      <TopSection />
      {isLoading ? <Loading /> : <MainSection />}
    </main>
  );
};

export default MainPage;
