import { FC, useContext } from 'react';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';

const Pagination: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const lastPage = context?.resObj?.pagination.last_visible_page;

  const handlePageChange = (i: number) => {
    context?.setCurrentPage(i);
    console.log(i);
    console.log(lastPage);
  };

  return (
    <div className="pagination">
      {lastPage
        ? Array.from({
            length: lastPage,
          }).map((_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))
        : null}
    </div>
  );
};

export default Pagination;
