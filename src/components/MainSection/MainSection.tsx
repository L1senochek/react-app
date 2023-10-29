import React, { Component } from 'react';
import './main-section.scss';
import Cards from '../Cards/Cards';

class MainSection extends Component {
  render = (): JSX.Element => {
    return (
      <div className="main-section">
        <h2 className="main-section__title">Planets:</h2>
        <Cards />
      </div>
    );
  };
}

export default MainSection;
