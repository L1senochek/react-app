import React, { FC, useContext } from 'react';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Card from '../Card/Card';
import './cards.scss';

const Cards: FC = (): JSX.Element => {
  const context = useContext(MainPageContext);
  return (
    <div className="cards__wrapper">
      {context?.arrRes.map(
        (item): JSX.Element => <Card key={item.name + item.created} {...item} />
      )}
    </div>
  );
};

export default Cards;
