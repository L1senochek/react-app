import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import './pagination.scss';
import Btn from '../Btn/Btn';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';
import IconfigStore from '../../model/store/IconfigStore';
import { useAppSelector } from '../../store/hooks';
// import { setArrRes } from '../../store/arrResSlice';
import { useGetAnimeQuery } from '../../api/getAnimeRedux';

const Pagination: FC = (): JSX.Element => {
  const searchValue = useAppSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
  // const { pageNum, limitNum } = useParams();
  // const data = useLoaderData() as { data: Promise<IAnime> };
  // const dispatch = useAppDispatch();
  const { pageNum, limitNum, query } = useParams();
  const params = { pageNum, limitNum, query };
  const { data = [] } = useGetAnimeQuery(params);

  const visiblePage = 3;
  const firstPage = 1;
  const totalPages = data.pagination.last_visible_page
    ? data.pagination.last_visible_page
    : 1;
  const startPage = Math.max(
    1,
    (pageNum ? +pageNum : 1) - Math.floor(visiblePage / 2)
  );
  const endPage = Math.min(totalPages, startPage + visiblePage - 1);

  // useEffect(() => {
  //   (async () => {
  //     dispatch(setArrRes(data.data));
  //     console.log(`data`, data);
  //   })();
  // }, [data, data.data, dispatch, refetch]);

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
};

export default Pagination;
