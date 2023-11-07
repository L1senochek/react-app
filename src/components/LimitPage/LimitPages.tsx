import React, { FC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  PIECE_PATH_LIMIT,
  PIECE_PATH_PAGE,
  PIECE_PATH_QUERY,
} from '../../utils/constants/constants';
import './limit-pages.scss';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';

const LimitPages: FC = () => {
  const context = useContext(MainPageContext);
  const { limitNum } = useParams();
  const limitArr = [MIN_LIMIT_PAGES, AVG_LIMIT_PAGES, MAX_LIMIT_PAGES];

  return (
    <div className="limit-pages">
      <p className="limit-pages__title">Limit pages: </p>
      {limitArr.map((limit) => (
        <Link
          key={`limit-pages${limit}`}
          className={`limit-pages__btn btn ${
            limitNum && +limitNum === limit ? 'active' : ''
          }`}
          to={`/${PIECE_PATH_PAGE}1/${PIECE_PATH_LIMIT}${limit}${
            context?.searchValue
              ? `/${PIECE_PATH_QUERY}${context?.searchValue}`
              : ''
          }`}
        >
          {limit}
        </Link>
      ))}
    </div>
  );
};

export default LimitPages;
