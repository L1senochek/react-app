import React, { ChangeEvent, Component, ContextType } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import { SearchProps } from '../../model/components/Search/Search';
import getPlanets from '../../api/getPlanets';

class Search extends Component {
  constructor(props: SearchProps) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  static contextType = MainPageContext;
  declare context: ContextType<typeof MainPageContext>;

  async buttonClick() {
    const planet = await getPlanets();
    console.log(planet);
    this.context.setIsLoading(false);
    console.log(
      222,
      this.context.searchValue,
      this.context.searchValue,
      this.context.isLoading
    );
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
