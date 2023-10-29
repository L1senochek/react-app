import React, { Component, ContextType } from 'react';
import './cards.scss';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import Card from '../Card/Card';

class Cards extends Component {
  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  render = (): JSX.Element => {
    return (
      <div className="cards__wrapper">
        {this.context.arrRes.map(
          (item): JSX.Element => (
            <Card key={item.name + item.created} {...item} />
          )
        )}
      </div>
    );
  };
}

export default Cards;
