import React, { FC } from 'react';
import Search from '../Search/Search';
import './top-section.scss';

const TopSection: FC = (): JSX.Element => {
  return (
    <div className="top-section">
      <div className="top-section__search_wrapper">
        <Search />
      </div>
      <hr className="top-section__separator" />
    </div>
  );
};

export default TopSection;
