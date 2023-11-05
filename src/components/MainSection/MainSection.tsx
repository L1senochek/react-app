import React, { FC } from 'react';
import './main-section.scss';
import Cards from '../Cards/Cards';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import Pagination from '../Pagination/Pagination';
import LimitPages from '../LimitPages/LimitPages';

const MainSection: FC = (): JSX.Element => {
  return (
    <div className="main-section">
      <h2 className="main-section__title">Titles:</h2>
      <div className="main-section__nav-btn">
        <ErrorBtn />
        <LimitPages />
      </div>
      <Cards />
      <Pagination />
    </div>
  );
};

export default MainSection;
