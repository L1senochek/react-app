import React, { FC } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import getAnime from '../../api/getAnime';
import IAnime from '../../model/api/IAnime';
import IAnimeData from '../../model/api/IAnimeData';

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
  defer({ data: getAnime(params.pageNum, params.limitNum, params.query) });

export default Cards;
