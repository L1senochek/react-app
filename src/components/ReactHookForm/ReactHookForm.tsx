import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import { setArrFormState, setName } from '@/store/slices/reactHookFormSlice';
import { FC, useState } from 'react';
import styles from './react-hook-form.module.scss';
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
      .string()
      .required('Age is required')
      .matches(/^\d+$/, 'Should not contain negative values'),
    email: yup
      .string()
      .required('Email is required')
      .matches(
        /^\S+@\S+\.\S+$/i,
        'Should be a valid email address(example@example.com)'
      ),
    passwordOne: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
        'Should contain 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
      ),
    passwordTwo: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('passwordOne')], 'Should match entered password'),
  })
  .required();

const ReactHookForm: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    <div className={styles['react-hook-form']}>
      <h2 onClick={() => dispatch(setArrFormState())}>ReactHookForm</h2>
      <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input placeholder={'Name'} {...register('name')} />
        <span className="error">
          {formState.errors.name && (
            <span>{formState.errors.name.message}</span>
          )}
        </span>
        <label>Age:</label>
        <input placeholder={'Age'} {...register('age')} type="number" />
        <span className="error">
          {formState.errors.age && <span>{formState.errors.age.message}</span>}
        </span>
        <label>Email:</label>
        <input placeholder={'Email'} {...register('email')} />
        <span className="error">
          {formState.errors.email && (
            <span>{formState.errors.email.message}</span>
          )}
        </span>
        <label>Password</label>
        <div>
          <input
            {...register('passwordOne')}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Password'}
            autoComplete="false"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <span className="error">
          {formState.errors.passwordOne && (
            <span>{formState.errors.passwordOne.message}</span>
          )}
        </span>
        <label>Confirm Password</label>
        <div>
          <input
            {...register('passwordTwo')}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder={'Confirm Password'}
            autoComplete="false"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <span className="error">
          {formState.errors.passwordTwo && (
            <span>{formState.errors.passwordTwo.message}</span>
          )}
        </span>

        <input type="submit" value={'submit'} />
      </form>
    </div>
  );
};

export default ReactHookForm;
