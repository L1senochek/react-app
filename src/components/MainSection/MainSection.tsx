import React, { FC, Suspense } from 'react';
import './main-section.scss';
import Cards from '../Cards/Cards';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import Pagination from '../Pagination/Pagination';
import LimitPages from '../LimitPage/LimitPages';
import Loading from '../Loading/Loading';
import { Outlet } from 'react-router-dom';

const MainSection: FC = (): JSX.Element => {
  return (
    <>
      <div className="main-section">
        <Suspense fallback={<Loading />}>
          <h2 className="main-section__title">Titles:</h2>
          <div className="main-section__nav-btn">
            <ErrorBtn />
            <LimitPages />
          </div>
          <Cards />
          <Pagination />
        </Suspense>
        <Outlet />
      </div>
    </>
  );
};

export default MainSection;
