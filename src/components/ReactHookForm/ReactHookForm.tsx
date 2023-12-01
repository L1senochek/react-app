import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import { setArrFormState, setName } from '@/store/slices/reactHookFormSlice';
import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z][a-zA-Z\s]*$/, 'Should start with an uppercase letter'),
    age: yup
      .number()
      .required('Age is required')
      .positive('Should not contain negative values')
      .integer('Should be an integer'),
  })
  .required();

const ReactHookForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // const { register, handleSubmit, formState } = useForm<FormValuesState>({
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit: SubmitHandler<FormValuesState> = (data) => {
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setName(data.name));
    dispatch(setArrFormState());
  };

  return (
    <div className="react-hook-form">
      <h2 onClick={() => dispatch(setArrFormState())}>ReactHookForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input {...register('name')} />
        <span className="error">
          {formState.errors.name && (
            <span>{formState.errors.name.message}</span>
          )}
        </span>
        <label>Age:</label>
        <input {...register('age')} type="number" />
        <span className="error">
          {formState.errors.age && <span>{formState.errors.age.message}</span>}
        </span>
        <input type="submit" value={'submit'} />
      </form>
    </div>
  );
};

export default ReactHookForm;
