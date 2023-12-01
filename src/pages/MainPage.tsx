import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  PATH_REACT_HOOK_FORM,
  PATH_UNCONTROLED_FORM,
} from '@/utils/constants/constants';
import styles from './main-page.module.scss';

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.links}>
        <Link to={PATH_UNCONTROLED_FORM}>Uncontroled Form</Link>
        <Link to={PATH_REACT_HOOK_FORM}>React Hook Form</Link>
      </div>
      <div className={styles['submit-info']}>Submit info</div>
    </>
  );
};

export default MainPage;
