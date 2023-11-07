import React, { FC } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import {
  Await,
  LoaderFunction,
  defer,
  redirect,
  useLoaderData,
} from 'react-router-dom';
import getAnime from '../../api/getAnime';
import IAnime from '../../model/api/IAnime';
import IAnimeData from '../../model/api/IAnimeData';
import { PATH_NOT_FOUND } from '../../utils/constants/constants';

const Cards: FC = (): JSX.Element => {
  const data = useLoaderData() as { data: Promise<IAnime> };

  return (
    <Await resolve={data.data}>
      {(cards) => {
        return (
          <div className="cards__wrapper">
            {cards.data.map(
              (item: IAnimeData): JSX.Element => (
                <Card key={item.mal_id} {...item} />
              )
            )}
          </div>
        );
      }}
    </Await>
  );
};

export const CardsLoader: LoaderFunction<IAnime> = async ({ params }) =>
  params.pageNum &&
  !isNaN(+params.pageNum) &&
  params.limitNum &&
  !isNaN(+params.limitNum)
    ? defer({ data: getAnime(params.pageNum, params.limitNum, params.query) })
    : redirect(PATH_NOT_FOUND);

export default Cards;
