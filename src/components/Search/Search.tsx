import React, { Component } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';

class Search extends Component {
  render(): JSX.Element {
    return (
      <div className="search">
        <button className="search__loupe">
          <IconLoupe />
        </button>
        <input
          className="search__input"
          type="search"
          placeholder="Search..."
          id="search"
        />
      </div>
    );
  }
}

export default Search;
