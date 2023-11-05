import { FC, useContext } from 'react';
import { Await, Link, useLoaderData, useParams } from 'react-router-dom';
import './pagination.scss';
import Btn from '../Btn/Btn';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import IAnime from '../../model/api/IAnime';

const Pagination: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const { pageNum, limitNum } = useParams();
  const data = useLoaderData() as { data: Promise<IAnime> };

  const visiblePage = 3;
  const firstPage = 1;

  return (
    <Await resolve={data.data}>
      {(cards) => {
        console.log(cards);
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
                to={`/page/${firstPage}/limit/${limitNum}/query/${
                  context?.searchValue ? context?.searchValue : ''
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
                to={`/page/${startPage + i}/limit/${limitNum}/query/${
                  context?.searchValue ? context?.searchValue : ''
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
                to={`/page/${totalPages}/limit/${limitNum}/query/${
                  context?.searchValue ? context?.searchValue : ''
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
