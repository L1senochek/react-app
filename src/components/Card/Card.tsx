import React from 'react';
import './card.scss';
import IAnimeData from '../../model/api/IAnimeData';

const Card: React.FC<IAnimeData> = (props): JSX.Element => {
  const createStructureRender = (
    propsTitle: string,
    propsValue: string | number | undefined
  ): string | number | JSX.Element | undefined => {
    return (
      propsValue && (
        <h4 className={`card__description ${propsTitle.toLowerCase()}`}>
          <span className="card__description_title">{propsTitle}: </span>
          <span className="card__description_value">{propsValue}</span>
        </h4>
      )
    );
  };

  return (
    <div className="card">
      <h3 className="card__name">{props.title}</h3>
      <div className="card__img">
        <img src={`${props.images.jpg.image_url}`} />
      </div>
      {createStructureRender('Score', props.score)}
      {createStructureRender('Status', props.status)}
      {createStructureRender('Type', props.type)}
      {createStructureRender('Episodes', props.episodes)}
      {createStructureRender('Duration', props.duration)}
    </div>
  );
};

export default Card;
