import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';
import './limit-pages.scss';
import IconfigStore from '../../model/store/IconfigStore';
import { useSelector } from 'react-redux';

const LimitPages: FC = () => {
  const searchValue = useSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
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
          to={`/${PAGE_PATH_PART}1/${LIMIT_PATH_PART}${limit}${
            searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
          }`}
        >
          {limit}
        </Link>
      ))}
    </div>
  );
};

export default LimitPages;
