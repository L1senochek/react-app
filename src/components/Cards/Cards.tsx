import React, { FC, Suspense } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import {
  Await,
  LoaderFunction,
  defer,
  useLoaderData,
  useParams,
} from 'react-router-dom';
import getAnime from '../../api/getAnime';
import IAnime from '../../model/api/IAnime';
import Loading from '../Loading/Loading';
import IAnimeData from '../../model/api/IAnimeData';

const Cards: FC = (): JSX.Element => {
  const { pageNum } = useParams();
  const { data } = useLoaderData() as { data: Promise<IAnime> };
  console.log('USEEParams', data, pageNum);

  // const context = useContext(MainPageContext);
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(cards) => (
          <div className="cards__wrapper">
            {cards.data.map(
              (item: IAnimeData): JSX.Element => (
                <Card key={item.mal_id} {...item} />
              )
            )}
          </div>
        )}
      </Await>
    </Suspense>
  );
  // return (
  //   <div className="cards__wrapper">
  //     {context?.arrRes.map(
  //       (item): JSX.Element => <Card key={item.mal_id} {...item} />
  //     )}
  //   </div>
  // );
};

export const CardsLoader: LoaderFunction<IAnime> = async ({ params }) => {
  console.log('pageNum', params, params.pageNum, params.limitNum, params.query);
  const anime = getAnime(params.pageNum, params.limitNum, params.query);
  // http://localhost:5173/page/2/limit/2/query/test

  return defer({ data: anime });
};

export default Cards;
