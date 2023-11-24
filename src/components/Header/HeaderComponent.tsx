'use client';
import { FC } from 'react';
import Link from 'next/link';
import style from './header.module.scss';

const HeaderComponent: FC = (): JSX.Element => {
  return (
    <header className={style['header']}>
      <Link href={'/?page=1&limit=25'}> Anime</Link>
    </header>
  );
};

export default HeaderComponent;
