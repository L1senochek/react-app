import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setArrFormState, setName } from '@/store/slices/uncontroledFormSlice';
import { RootState } from '@/store/store';
import { FC, useEffect } from 'react';

const UncontroledForm: FC = (): JSX.Element => {
  const uncontroledFormValue = useAppSelector(
    (state: RootState) => state.ucontroledForm.currentForm
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setName('UncontroledForm'));
    console.log(uncontroledFormValue, 'uncontroledFormValue');
  }, [dispatch, uncontroledFormValue]);

  console.log(uncontroledFormValue);

  return (
    <div className="uncontrolled-form">
      <h2 onClick={() => dispatch(setArrFormState())}>UncontroledForm</h2>
    </div>
  );
};

export default UncontroledForm;
