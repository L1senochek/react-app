import React, { ChangeEvent, Component } from 'react';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';
import { SearchProps, SearchState } from '../../model/components/Search/Search';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.setState({ searchValue: value });
    console.log(111, value);
    this.props.onSearchChange(value);
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
          value={this.state.searchValue}
          onChange={this.searchChange}
        />
      </div>
    );
  }
}

export default Search;
