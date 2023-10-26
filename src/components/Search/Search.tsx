import React from 'react';

const Search = (): JSX.Element => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="Search..."
        id="search"
      />
    </div>
  );
};

export default Search;
