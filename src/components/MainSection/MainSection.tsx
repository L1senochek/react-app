import React, { FC } from 'react';
import './main-section.scss';
import Cards from '../Cards/Cards';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import Pagination from '../Pagination/Pagination';
import LimitPages from '../LimitPage/LimitPages';
import Loading from '../Loading/Loading';
import { Outlet, useParams } from 'react-router-dom';
import { useGetAnimeQuery } from '../../api/getAnimeRedux';

const MainSection: FC = (): JSX.Element => {
  const { pageNum, limitNum, query } = useParams();
  const { isLoading } = useGetAnimeQuery({ pageNum, limitNum, query });

  return (
    <>
      <div className="main-section">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="main-section__top">
              <h2 className="main-section__title">Titles:</h2>
              <div className="main-section__nav-btn">
                <ErrorBtn />
                <LimitPages />
              </div>
            </div>
            <Cards />
            <Pagination />
          </>
        )}

        <Outlet />
      </div>
    </>
  );
};

export default MainSection;
