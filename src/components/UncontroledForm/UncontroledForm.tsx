import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setName } from '@/store/slices/uncontroledFormSlice';
import { RootState } from '@/store/store';
import { FC, useEffect } from 'react';

const UncontroledForm: FC = (): JSX.Element => {
  const uncontroledFormValue = useAppSelector(
    (state: RootState) => state.ucontroledForm.values
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setName('UncontroledForm'));
  }, [dispatch]);

  console.log(uncontroledFormValue);

  return (
    <div className="uncontrolled-form">
      <h2>UncontroledForm</h2>
    </div>
  );
};

export default UncontroledForm;
