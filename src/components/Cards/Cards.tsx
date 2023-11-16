import React, { FC } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import { LoaderFunction, defer, redirect, useParams } from 'react-router-dom';
import getAnime from '../../api/getAnime';
import IAnime from '../../model/api/IAnime';
import IAnimeData from '../../model/api/IAnimeData';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  PATH_NOT_FOUND,
} from '../../utils/constants/constants';
import IconfigStore from '../../model/store/IconfigStore';
import { setArrRes } from '../../store/arrResSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAnimeQuery } from '../../api/getAnimeRedux';

const Cards: FC = (): JSX.Element => {
  const arrRes = useAppSelector((state: IconfigStore) => state.arrRes.arrRes);
  const dispatch = useAppDispatch();
  // const data = useLoaderData() as { data: Promise<IAnime> };
  const { pageNum, limitNum, query } = useParams();
  const { data = [] } = useGetAnimeQuery({ pageNum, limitNum, query });

  dispatch(setArrRes(data.data));
  console.log(arrRes, 'arrRes');

  return (
    <div className="cards__wrapper">
      {data && data.length !== 0 ? (
        data.data.map(
          (item: IAnimeData): JSX.Element => (
            <Card key={item.mal_id} {...item} />
          )
        )
      ) : (
        <div className="cards__message">Sorry, nothing found.</div>
      )}
    </div>
  );
};

export const CardsLoader: LoaderFunction<IAnime> = async ({ params }) =>
  params.pageNum &&
  !isNaN(+params.pageNum) &&
  params.limitNum &&
  !isNaN(+params.limitNum) &&
  (+params.limitNum === MIN_LIMIT_PAGES ||
    +params.limitNum === AVG_LIMIT_PAGES ||
    +params.limitNum === MAX_LIMIT_PAGES)
    ? defer({ data: getAnime(params.pageNum, params.limitNum, params.query) })
    : redirect(PATH_NOT_FOUND);

export default Cards;
