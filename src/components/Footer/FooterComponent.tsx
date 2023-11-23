import { FC } from 'react';
import Link from 'next/link';
import { MY_GITHUB_URL } from '@/src/utils/constants/constants';
import IconGithub from '../IconGithub/IconGithub';

const FooterComponent: FC = (): JSX.Element => {
  return (
    <footer>
      <ul>
        <li>2023</li>
        <li>
          <Link href={MY_GITHUB_URL} target="_blank">
            <IconGithub />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
