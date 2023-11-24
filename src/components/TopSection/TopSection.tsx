'use client';
import React, { FC } from 'react';
import './top-section.scss';
import Search from '@/components/Search/Search';

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
