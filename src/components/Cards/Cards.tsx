import React, { FC } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import {
  Await,
  LoaderFunction,
  defer,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import getAnime from '../../api/getAnime';
import IAnime from '../../model/api/IAnime';
import IAnimeData from '../../model/api/IAnimeData';
import ISetResObj from '../../model/context/ISetResObj/ISetResObj';

const Cards: FC = (): JSX.Element => {
  const { data } = useLoaderData() as { data: Promise<IAnime> };
  const { setResObj } = useOutletContext<ISetResObj>();

  data.then((res) => {
    setResObj(res);
  });

  return (
    <Await resolve={data}>
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

export const CardsLoader: LoaderFunction<IAnime> = async ({ params }) => {
  const anime = getAnime(params.pageNum, params.limitNum, params.query);

  return defer({ data: anime });
};

export default Cards;
