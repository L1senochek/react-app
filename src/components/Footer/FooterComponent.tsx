import { FC } from 'react';
import Link from 'next/link';
import { MY_GITHUB_URL } from '@/utils/constants/constants';
import style from './footer.module.scss';
import IconGithub from '@/components/IconGithub/IconGithub';

const FooterComponent: FC = (): JSX.Element => {
  return (
    <footer className={style['footer']}>
      <ul className={style['footer__list']}>
        <li className={style['footer__item']}>2023</li>
        <li className={style['footer__item']}>
          <Link href={MY_GITHUB_URL} target="_blank">
            <IconGithub />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
