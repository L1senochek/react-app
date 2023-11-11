import React, { FC, useContext, useEffect } from 'react';
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
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  PATH_NOT_FOUND,
} from '../../utils/constants/constants';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import { IMainPageContextState } from '../../model/context/MainPageContext/MainPageContext';

const Cards: FC = (): JSX.Element => {
  const { arrRes, setArrRes } = useContext(
    MainPageContext
  ) as IMainPageContextState;
  const data = useLoaderData() as { data: Promise<IAnime> };

  useEffect(() => {
    (async () => {
      setArrRes(await data.data);
    })();
  }, [data.data, setArrRes]);

  return (
    <Await resolve={data.data}>
      {() => {
        return (
          <div className="cards__wrapper">
            {arrRes?.data.length !== 0 ? (
              arrRes?.data.map(
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
  !isNaN(+params.limitNum) &&
  (+params.limitNum === MIN_LIMIT_PAGES ||
    +params.limitNum === AVG_LIMIT_PAGES ||
    +params.limitNum === MAX_LIMIT_PAGES)
    ? defer({ data: getAnime(params.pageNum, params.limitNum, params.query) })
    : redirect(PATH_NOT_FOUND);

export default Cards;
