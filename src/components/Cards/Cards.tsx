import React, { FC, useEffect } from 'react';
import Card from '../Card/Card';
import './cards.scss';
import { useParams } from 'react-router-dom';
import IAnimeData from '../../model/api/IAnimeData';
import { setArrRes } from '../../store/arrResSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAnimeQuery } from '../../api/getAnimeRedux';
import IconfigStore from '../../model/store/IconfigStore';

const Cards: FC = (): JSX.Element => {
  const arrRes = useAppSelector((state: IconfigStore) => state.arrRes.arrRes);
  const dispatch = useAppDispatch();
  const { pageNum, limitNum, query } = useParams();
  const { data = [] } = useGetAnimeQuery({ pageNum, limitNum, query });

  useEffect(() => {
    dispatch(setArrRes(data));
  }, [data, dispatch]);

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
