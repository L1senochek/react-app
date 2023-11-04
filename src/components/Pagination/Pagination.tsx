import { FC, useContext } from 'react';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import { Link } from 'react-router-dom';
import './pagination.scss';

const Pagination: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const totalPages = context?.resObj?.pagination.last_visible_page
    ? context?.resObj?.pagination.last_visible_page
    : 1;
  const visiblePage = 3;
  const firstPage = 1;
  const startPage = Math.max(
    1,
    (context?.currentPage ? context?.currentPage : 1) -
      Math.floor(visiblePage / 2)
  );
  const endPage = Math.min(totalPages, startPage + visiblePage - 1);

  const handlePageChange = (pageNum: number) => {
    context?.setCurrentPage(pageNum);
  };

  return (
    <div className="pagination">
      {startPage > 1 && (
        <Link
          to={`?page=${firstPage}`}
          className="pagination__btn btn"
          onClick={() => handlePageChange(firstPage)}
        >
          {firstPage}
        </Link>
      )}
      {startPage >= 2 && (
        <button disabled className="pagination__btn btn">
          ...
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
        <Link
          key={i}
          to={`?page=${startPage + i}`}
          className={`pagination__btn btn ${
            startPage + i === context?.currentPage ? 'active' : ''
          }`}
          onClick={() => handlePageChange(startPage + i)}
        >
          {startPage + i}
        </Link>
      ))}
      {startPage <= totalPages - 3 && (
        <button disabled className="pagination__btn btn">
          ...
        </button>
      )}
      {endPage < totalPages && (
        <Link
          to={`?page=${totalPages}`}
          className="pagination__btn btn"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Link>
      )}
    </div>
  );
};

export default Pagination;
