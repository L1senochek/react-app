import { FC, useEffect, useState } from 'react';
import styles from './submit-info.module.scss';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import SubmitCardDescription from '../SubmitCardDescription/SubmitCardDescription';
import { FormState } from '@/model/FormValuesState';

const SubmitInfo: FC = (): JSX.Element => {
  const [reactHookFormArr, setReactHookFormArr] = useState<FormState[]>();
  const [reactHookFormImgArr, setReactHookFormImgArr] = useState<string[]>();
  const ucontroledFormValue = useAppSelector(
    (state: RootState) => state.ucontroledForm.arrFormState
  );
  const reactHookFormValue = useAppSelector(
    (state: RootState) => state.reactHookForm.arrFormState
  );
  const image = useAppSelector(
    (state) => state.reactHookForm.currentForm.values.img
  );

  useEffect(() => {
    console.log(ucontroledFormValue, reactHookFormValue, image);
    setReactHookFormArr([...reactHookFormValue].reverse());
    setReactHookFormImgArr([...image].reverse());
  }, [image, reactHookFormValue, ucontroledFormValue]);

  return (
    <>
      <div className={styles['submit-info']}>
        <h3 className={styles['submit-info__title']}>Submit info:</h3>
        <div className={styles['submit-info__wrapper']}>
          <div className={styles['submit-info__form']}>
            <h4 className={styles['submit-info__form_title']}>
              Uncontroled form submit info:
            </h4>
            {/* <SubmitCardDescription
              title="Card 1"
              description="Description for Card 1"
            />
            <SubmitCardDescription
              title="Card 2"
              description="Description for Card 2"
            />
            <SubmitCardDescription
              title="Card 2"
              description="Description for Card 2"
            /> */}
          </div>
          <div className={styles['submit-info__form']}>
            <h4 className={styles['submit-info__form_title']}>
              React Hook form submit info:
            </h4>
            {reactHookFormImgArr &&
              reactHookFormArr?.map((formValue, index) => (
                <SubmitCardDescription
                  key={index}
                  title={`Card ${index + 1}`}
                  description={formValue}
                  image={reactHookFormImgArr[index]}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitInfo;
