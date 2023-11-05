import React, { FC, useState } from 'react';
import TopSection from '../../components/TopSection/TopSection';
import './main-page.scss';
import { Outlet } from 'react-router-dom';
import IAnime from '../../model/api/IAnime';

const MainPage: FC = (): JSX.Element => {
  const [resObj, setResObj] = useState<IAnime | undefined>(undefined);
  return (
    <main className="main-page">
      <TopSection />
      <Outlet context={{ resObj, setResObj }} />
    </main>
  );
};

export default MainPage;
