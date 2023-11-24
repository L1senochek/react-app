import React, { FC, useEffect } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import { useParams } from 'react-router-dom';
import IAnimeData from '../../model/api/IAnimeData';
import { setArrRes } from '../../store/slices/arrResSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAnimeQuery } from '../../api/getAnime';
import { RootState } from '../../store/configStore';
import { setCardsLoading } from '../../store/slices/loadingSlice';

const Cards: FC = (): JSX.Element => {
  const arrRes = useAppSelector((state: RootState) => state.arrRes.arrRes);
  const dispatch = useAppDispatch();
  const { pageNum, limitNum, query } = useParams();
  const { data } = useGetAnimeQuery({ pageNum, limitNum, query });
  const cardsLoading = useAppSelector((state) => state.loading.cardsLoading);

  useEffect(() => {
    dispatch(setCardsLoading(true));
    dispatch(setArrRes(data));
    dispatch(setCardsLoading(false));
  }, [data, dispatch, cardsLoading]);

  return (
    <div className="cards__wrapper">
      {arrRes && arrRes.data.length !== 0 ? (
        arrRes.data.map(
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

export default Cards;
