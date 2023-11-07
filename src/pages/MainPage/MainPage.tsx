import React, { FC } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import { Outlet } from 'react-router-dom';

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <TopSection />
      </header>
      <main className="main main-page">
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
