import React, { ChangeEvent, Component, ContextType } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';
import { SearchContext } from '../../context/SearchContext/SearchContext';
import { SearchProps } from '../../model/components/Search/Search';

class Search extends Component {
  static contextType = SearchContext;
  declare context: ContextType<typeof SearchContext>;
  constructor(props: SearchProps) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }
  checkLocalStorage() {
    const localStorageSearchValue = localStorage.getItem('searchValue');
    if (localStorageSearchValue) {
      this.context.setSearchValue(localStorageSearchValue);
    }
  }

  buttonClick() {
    console.log(this.context.searchValue, this.context.searchValue);
  }

  keyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.buttonClick();
    }
  };

  searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.context.setSearchValue(value);
    console.log(111, value, this.context);
  };

  render(): JSX.Element {
    return (
      <div className="search">
        <button className="search__loupe" onClick={this.buttonClick}>
          <IconLoupe />
        </button>
        <input
          className="search__input"
          type="search"
          placeholder="Search..."
          id="search"
          value={this.context.searchValue}
          onChange={this.searchChange}
          onKeyUp={this.keyUp}
        />
      </div>
    );
  }
}

export default Search;
