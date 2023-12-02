import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  PATH_REACT_HOOK_FORM,
  PATH_UNCONTROLED_FORM,
} from '@/utils/constants/constants';
import styles from './main-page.module.scss';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const MainPage: FC = (): JSX.Element => {
  const ucontroledFormValue = useAppSelector(
    (state: RootState) => state.ucontroledForm.arrFormState
  );
  const reactHookFormValue = useAppSelector(
    (state: RootState) => state.reactHookForm.arrFormState
  );
  const image = useAppSelector(
    (state) => state.reactHookForm.currentForm.values.image
  );

  useEffect(() => {
    console.log(ucontroledFormValue, reactHookFormValue);
  }, [reactHookFormValue, ucontroledFormValue]);

  return (
    <>
      <div className={styles.links}>
        <Link to={PATH_UNCONTROLED_FORM}>Uncontroled Form</Link>
        <Link to={PATH_REACT_HOOK_FORM}>React Hook Form</Link>
      </div>
      <div className={styles['submit-info']}>Submit info</div>
      {image && <img src={image} alt="image" style={{ width: '5vw' }} />}
    </>
  );
};

export default MainPage;
