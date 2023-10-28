import React, { Component } from 'react';
import './top-section.scss';
import Search from '../Search/Search';

class TopSection extends Component {
  render(): JSX.Element {
    return (
      <div className="top-section">
        <div className="top-section__search_wrapper">
          TopSection
          <Search />
        </div>
        <hr className="top-section__separator" />
      </div>
    );
  }
}

export default TopSection;
