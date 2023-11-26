import React, { FC } from 'react';
import Card from '@/components/Card/Card';
import './cards.scss';
import IAnimeData from '@/model/api/IAnimeData';
import IAnime from '@/model/api/IAnime';

const Cards: FC<{ data: IAnime }> = ({ data }): JSX.Element => {
  return (
    <div className="cards__wrapper">
      {data && data.data.length !== 0 ? (
        data.data.map(
          (item: IAnimeData): JSX.Element => (
            <Card key={item.mal_id + new Date().toDateString()} {...item} />
          )
        )
      ) : (
        <div className="cards__message">Sorry, nothing found.</div>
      )}
    </div>
  );
};

export default Cards;
