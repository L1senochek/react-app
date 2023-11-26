'use client';
import { FC } from 'react';
import './card-info.scss';
import Loading from '../Loading/Loading';
import { useGetAnimeIdQuery } from '@/api/getAnime';
import CardDescription from '@/components/CardDescription/CardDescription';

const CardInfo: FC<{ cardId: string }> = ({ cardId }): JSX.Element => {
  const { data, isLoading } = useGetAnimeIdQuery({ id: cardId });

  if (isLoading) {
    return <Loading />;
  }

  return <CardDescription arrResCard={data} />;
};

export default CardInfo;
