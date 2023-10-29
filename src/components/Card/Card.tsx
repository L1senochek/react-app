import React, { Component } from 'react';
import './card.scss';
import CardProps from '../../model/components/Card/Card';
import IconPlanet from '../IconPlanet/IconPlanet';

class Card extends Component<CardProps> {
  createStructureRender = (
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

  render = (): JSX.Element => {
    return (
      <div className="card">
        <h3 className="card__name">{this.props.name}</h3>
        <div className="card__img">
          <IconPlanet />
        </div>
        {this.createStructureRender('Diameter', this.props.diameter)}
        {this.createStructureRender('Gravity', this.props.gravity)}
        {this.createStructureRender('Climate', this.props.climate)}
        {this.createStructureRender('Surface water', this.props.surfaceWater)}
        {this.createStructureRender('Population', this.props.population)}
        {this.createStructureRender('Terrain', this.props.terrain)}
      </div>
    );
  };
}

export default Card;
