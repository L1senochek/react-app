import React, { Component, ContextType } from 'react';
import './cards.scss';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';

class Cards extends Component {
  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  render(): JSX.Element {
    return (
      <div className="cards__wrapper">
        Cards
        {this.context.arrRes.map((item) => {
          return (
            <div key={item.name + item.created}>
              <div>{item.name}</div>
              <div>{item.climate}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
