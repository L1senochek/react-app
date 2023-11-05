import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
} from '../../utils/constants/constants';
import './limit-pages.scss';

const LimitPages: FC = () => {
  const { pageNum } = useParams();

  return (
    <div className="limit-pages">
      <p className="limit-pages__title">Limit pages: </p>
      <Link
        className="limit-pages__btn btn"
        to={`/page/${pageNum}/limit/${MIN_LIMIT_PAGES}`}
      >
        {MIN_LIMIT_PAGES}
      </Link>
      <Link
        className="limit-pages__btn btn"
        to={`/page/${pageNum}/limit/${AVG_LIMIT_PAGES}`}
      >
        {AVG_LIMIT_PAGES}
      </Link>
      <Link
        className="limit-pages__btn btn"
        to={`/page/${pageNum}/limit/${MAX_LIMIT_PAGES}`}
      >
        {MAX_LIMIT_PAGES}
      </Link>
    </div>
  );
};

export default LimitPages;
