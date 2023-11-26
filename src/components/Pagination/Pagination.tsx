'use client';
import { FC, useEffect } from 'react';
import './pagination.scss';
import Btn from '@/components/Btn/Btn';
import {
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '@/utils/constants/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/configStore';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { setArrRes } from '@/store/slices/arrResSlice';
import IAnime from '@/model/api/IAnime';

const Pagination: FC<{ data: IAnime }> = ({ data }): JSX.Element => {
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const pageNum = searchParams.get('page');
  const limitNum = searchParams.get('limit');

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

  useEffect(() => {
    dispatch(setArrRes(data));
  }, [data, dispatch]);

  return (
    <div className="pagination">
      {startPage > 1 && (
        <Link
          href={`/?${API_PAGE}${firstPage}&${API_LIMIT}${limitNum}${
            searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
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
          href={`/?${API_PAGE}${startPage + i}&${API_LIMIT}${limitNum}${
            searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
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
          href={`/?${API_PAGE}${totalPages}&${API_LIMIT}${limitNum}${
            searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
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
