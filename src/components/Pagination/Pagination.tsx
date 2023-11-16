import { FC } from 'react';
import { Await, Link, useLoaderData, useParams } from 'react-router-dom';
import './pagination.scss';
import Btn from '../Btn/Btn';
import IAnime from '../../model/api/IAnime';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';
import IconfigStore from '../../model/store/IconfigStore';
import { useSelector } from 'react-redux';

const Pagination: FC = (): JSX.Element => {
  const searchValue = useSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
  const { pageNum, limitNum } = useParams();
  const data = useLoaderData() as { data: Promise<IAnime> };
  const visiblePage = 3;
  const firstPage = 1;

  return (
    <Await resolve={data.data}>
      {(cards) => {
        const totalPages = cards.pagination.last_visible_page
          ? cards.pagination.last_visible_page
          : 1;
        const startPage = Math.max(
          1,
          (pageNum ? +pageNum : 1) - Math.floor(visiblePage / 2)
        );
        const endPage = Math.min(totalPages, startPage + visiblePage - 1);
        return (
          <div className="pagination">
            {startPage > 1 && (
              <Link
                to={`/${PAGE_PATH_PART}${firstPage}/${LIMIT_PATH_PART}${limitNum}${
                  searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
                }`}
                className="pagination__btn btn"
              >
                {firstPage}
              </Link>
            )}
            {startPage >= 2 && (
              <Btn classNameBtn="pagination__btn" text="..." disabled />
            )}
            {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
              <Link
                key={i}
                to={`/${PAGE_PATH_PART}${
                  startPage + i
                }/${LIMIT_PATH_PART}${limitNum}${
                  searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
                }`}
                className={`pagination__btn btn ${
                  pageNum && startPage + i === +pageNum ? 'active' : ''
                }`}
              >
                {startPage + i}
              </Link>
            ))}
            {startPage <= totalPages - 3 && (
              <Btn classNameBtn="pagination__btn" text="..." disabled />
            )}
            {endPage < totalPages && (
              <Link
                to={`/${PAGE_PATH_PART}${totalPages}/${LIMIT_PATH_PART}${limitNum}${
                  searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
                }`}
                className="pagination__btn btn"
              >
                {totalPages}
              </Link>
            )}
          </div>
        );
      }}
    </Await>
  );
};

export default Pagination;
