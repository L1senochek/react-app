import React, { FC, Suspense } from 'react';
import './main-section.scss';
import Cards from '../Cards/Cards';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import Pagination from '../Pagination/Pagination';
import LimitPages from '../LimitPage/LimitPages';
import Loading from '../Loading/Loading';

const MainSection: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="main-section">
        <h2 className="main-section__title">Titles:</h2>
        <div className="main-section__nav-btn">
          <ErrorBtn />
          <LimitPages />
        </div>
        <Cards />
        <Pagination />
      </div>
    </Suspense>
  );
};

export default MainSection;
