import { FC, useContext } from 'react';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import './pagination.scss';
import Btn from '../Btn/Btn';
import ISetResObj from '../../model/context/ISetResObj/ISetResObj';

const Pagination: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const { pageNum, limitNum } = useParams();
  const { resObj } = useOutletContext<ISetResObj>();

  // const totalPages = context?.resObj?.pagination.last_visible_page
  //   ? context?.resObj?.pagination.last_visible_page
  //   : 1;
  const totalPages = resObj?.pagination.last_visible_page
    ? resObj?.pagination.last_visible_page
    : 1;
  const visiblePage = 3;
  const firstPage = 1;
  // const startPage = Math.max(
  //   1,
  //   (context?.currentPage ? context?.currentPage : 1) -
  //     Math.floor(visiblePage / 2)
  // );
  const startPage = Math.max(
    1,
    (pageNum ? +pageNum : 1) - Math.floor(visiblePage / 2)
  );
  const endPage = Math.min(totalPages, startPage + visiblePage - 1);

  console.log('limitNumPAGINATION', limitNum, resObj);

  const handlePageChange = (pageNum: number) => {
    context?.setCurrentPage(pageNum);
  };

  return (
    <div className="pagination">
      {startPage > 1 && (
        <Link
          to={`/page/${firstPage}/limit/${limitNum}`}
          className="pagination__btn btn"
          onClick={() => handlePageChange(firstPage)}
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
          to={`/page/${startPage + i}/limit/${limitNum}`}
          className={`pagination__btn btn ${
            pageNum && startPage + i === +pageNum ? 'active' : ''
          }`}
          onClick={() => handlePageChange(startPage + i)}
        >
          {startPage + i}
        </Link>
      ))}
      {startPage <= totalPages - 3 && (
        <Btn classNameBtn="pagination__btn" text="..." disabled />
      )}
      {endPage < totalPages && (
        <Link
          to={`/page/${totalPages}/limit/${limitNum}`}
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
