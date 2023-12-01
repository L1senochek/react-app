import { useAppDispatch } from '@/store/hooks';
import { setName } from '@/store/slices/reactHookFormSlice';
import { FC, useEffect } from 'react';

const ReactHookForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setName('ReactHookForm'));
  }, [dispatch]);

  return (
    <div className="react-hook-form">
      <h2>ReactHookForm</h2>
    </div>
  );
};

export default ReactHookForm;
