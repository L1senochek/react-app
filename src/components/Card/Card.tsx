import React from 'react';
import './card.scss';
import CardProps from '../../model/components/Card/Card';
import IconPlanet from '../IconPlanet/IconPlanet';

const Card: React.FC<CardProps> = (props): JSX.Element => {
  const createStructureRender = (
    propsTitle: string,
    propsValue: string | undefined
  ): string | JSX.Element | undefined => {
    return (
      propsValue && (
        <h4 className={`card__description ${propsTitle.toLowerCase()}`}>
          <span className="card__description_title">{propsTitle}: </span>
          {propsValue}
        </h4>
      )
    );
  };

  return (
    <div className="card">
      <h3 className="card__name">{props.name}</h3>
      <div className="card__img">
        <IconPlanet />
      </div>
      {createStructureRender('Diameter', props.diameter)}
      {createStructureRender('Gravity', props.gravity)}
      {createStructureRender('Climate', props.climate)}
      {createStructureRender('Surface water', props.surfaceWater)}
      {createStructureRender('Population', props.population)}
      {createStructureRender('Terrain', props.terrain)}
    </div>
  );
};

export default Card;
