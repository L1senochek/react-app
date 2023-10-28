import React, { Component } from 'react';
import './card.scss';
import CardProps from '../../model/components/Card/Card';
import IconPlanet from '../IconPlanet/IconPlanet';

class Card extends Component<CardProps> {
  render(): JSX.Element {
    const { name, diameter, climate, terrain, surfaceWater } = this.props;
    return (
      <div className="card">
        <h3 className="card__name">{name}</h3>
        <div className="card__img">
          <IconPlanet />
        </div>
        {diameter && (
          <h4 className="card__description diameter">
            <span className="card__description_title">Diameter: </span>
            {diameter}
          </h4>
        )}
        {climate && (
          <h4 className="card__description climate">
            <span className="card__description_title">Climate: </span>
            {climate}
          </h4>
        )}
        {surfaceWater && (
          <h4 className="card__description surface-water">
            <span className="card__description_title">Surface water: </span>
            {surfaceWater}
          </h4>
        )}
        {terrain && (
          <h4 className="card__description terrain">
            <span className="card__description_title">Terrain: </span>
            {terrain}
          </h4>
        )}
      </div>
    );
  }
}

export default Card;
