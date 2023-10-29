import React, { ChangeEvent, Component, ContextType } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import getSearch from '../../api/getSearch';

class Search extends Component {
  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  buttonClick = async (): Promise<void> => {
    this.context.setIsLoading(true);
    const getSearchRes = await getSearch(this.context.searchValue);
    this.context.setArrRes(getSearchRes.results);
    this.context.setIsLoading(false);
  };

  keyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      this.buttonClick();
    }
  };

  searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.context.setSearchValue(value);
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
