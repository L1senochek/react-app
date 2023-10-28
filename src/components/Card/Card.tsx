import React, { Component } from 'react';
import './card.scss';
import CardProps from '../../model/components/Card/Card';

class Card extends Component<CardProps> {
  render(): JSX.Element {
    const { name, diameter, climate, terrain, surfaceWater } = this.props;
    return (
      <div className="card">
        <h3 className="card__name">{name}</h3>
        {diameter && (
          <div className="card__description diameter">
            <span className="card__description_title">Diameter: </span>
            {diameter}
          </div>
        )}
        {climate && (
          <div className="card__description climate">
            <span className="card__description_title">Climate: </span>
            {climate}
          </div>
        )}
        {surfaceWater && (
          <div className="card__description surface-water">
            <span className="card__description_title">Surface water: </span>
            {surfaceWater}
          </div>
        )}
        {terrain && (
          <div className="card__description terrain">
            <span className="card__description_title">Terrain: </span>
            {terrain}
          </div>
        )}
      </div>
    );
  }
}

export default Card;
