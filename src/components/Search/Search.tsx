import React, { ChangeEvent, Component, ContextType } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';
import { SearchContext } from '../../context/SearchContext/SearchContext';

class Search extends Component {
  static contextType = SearchContext;
  declare context: ContextType<typeof SearchContext>;

  checkLocalStorage() {
    const localStorageSearchValue = localStorage.getItem('searchValue');
    if (localStorageSearchValue) {
      this.context.setSearchValue(localStorageSearchValue);
    }
  }

  searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.context.setSearchValue(value);
    console.log(111, value, this.context);
  };

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
          value={this.context.searchValue}
          onChange={this.searchChange}
        />
      </div>
    );
  }
}

export default Search;
