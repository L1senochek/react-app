import React, { FC, useContext } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import MainSection from '../../components/MainSection/MainSection';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Loading from '../../components/Loading/Loading';

const MainPage: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  return (
    <main className="main-page">
      <TopSection />
      {context?.isLoading ? <Loading /> : <MainSection />}
    </main>
  );
};

export default MainPage;
