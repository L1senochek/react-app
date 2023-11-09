import React, { FC, useContext } from 'react';
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
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';

const Cards: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  const data = useLoaderData() as { data: Promise<IAnime> };

  return (
    <Await resolve={data.data}>
      {(cards) => {
        context?.setArrRes(cards);
        return (
          <div className="cards__wrapper">
            {context?.arrRes?.data.length !== 0 ? (
              cards.data.map(
                (item: IAnimeData): JSX.Element => (
                  <Card key={item.mal_id} {...item} />
                )
              )
            ) : (
              <div className="cards__message">Sorry, nothing found.</div>
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
