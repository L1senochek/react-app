import { FC, Suspense } from 'react';
import './card-info.scss';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import getAnimeId from '../../api/getAnimeId';
import IAnimeData from '../../model/api/IAnimeData';
import Loading from '../Loading/Loading';

const CardInfo: FC = (): JSX.Element => {
  const { cardId } = useLoaderData() as { cardId: Promise<IAnimeData> };

  console.log('cardId', cardId);

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={cardId}>
        {(cardsInfo) => {
          console.log('cardsInfo', cardsInfo);
          return (
            <div className="card-info">
              <div>{cardsInfo.data.duration}</div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CardInfo;

export const CardInfoLoader: LoaderFunction = async ({ params }) => {
  const anime = await getAnimeId(params.cardId);
  console.log(anime, 'animeId');

  return defer({ cardId: anime });
};
