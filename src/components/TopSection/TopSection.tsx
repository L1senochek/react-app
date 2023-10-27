import React, { Component } from 'react';
import './top-section.scss';
import Search from '../Search/Search';
import { SearchProps, SearchState } from '../../model/components/Search/Search';

class TopSection extends Component<SearchProps, SearchState> {
  render(): JSX.Element {
    return (
      <div className="top-section">
        <div className="top-section__search_wrapper">
          TopSection
          <Search onSearchChange={this.props.onSearchChange} />
        </div>
        <hr className="top-section__separator" />
      </div>
    );
  }
}

export default TopSection;
