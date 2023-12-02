import { useForm, FormProvider, Control, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import {
  setArrFormState,
  setImage,
  setName,
} from '@/store/slices/reactHookFormSlice';
import { FC, useState } from 'react';
import styles from './react-hook-form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormValues } from '@/model/FormValuesState';
import AutoCompleteHook from '../AutocompleteHook/AutoCompleteHook';

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
    gender: yup.string().required('Gender is required'),
    acceptTC: yup.boolean().oneOf([true], 'Should accept Terms & Conditions'),
    image: yup
      .mixed()
      .test('fileSize', 'File size is too large', (value) =>
        value instanceof FileList && value.length > 0
          ? value[0].size <= 2036388
          : false
      )
      .test('fileType', 'Unsupported file type', (value) =>
        value instanceof FileList && value.length > 0
          ? ['image/jpeg', 'image/png'].includes(value[0].type)
          : false
      ),
    selectedCountry: yup
      .string()
      .required('Country is required')
      .matches(/^[a-zA-Z]+$/, 'Should selected country'),
  })
  .required();

const ReactHookForm: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const methods = useForm();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result as string;
      dispatch(setImage({ image: base64Image, isValidImage: true }));
    };

    if (data.image instanceof FileList) {
      reader.readAsDataURL(data.image[0]);
    }

    console.log(data);
    if (data.name) {
      dispatch(setName(data.name));
    }
    dispatch(setArrFormState());
  };

  return (
    <div className={styles['react-hook-form']}>
      <h2 onClick={() => dispatch(setArrFormState())}>ReactHookForm</h2>
      <FormProvider {...methods}>
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
            {formState.errors.age && (
              <span>{formState.errors.age.message}</span>
            )}
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
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
          <div>
            <label>
              Male
              <input type="radio" value="male" {...register('gender')} />
            </label>
            <label>
              Female
              <input type="radio" value="female" {...register('gender')} />
            </label>
            <label>
              Other
              <input type="radio" value="other" {...register('gender')} />
            </label>
          </div>
          <span className="error">
            {formState.errors.gender && (
              <span>{formState.errors.gender.message}</span>
            )}
          </span>
          <label>
            Accept Terms & Conditions
            <input type="checkbox" {...register('acceptTC')} />
          </label>
          <label>Image:</label>
          <input
            {...register('image')}
            type="file"
            accept="image/jpeg, image/png"
          />
          <span className="error">
            {formState.errors.image && (
              <span>{formState.errors.image.message}</span>
            )}
          </span>
          <AutoCompleteHook
            label="Country"
            name="selectedCountry"
            control={control as Control<IFormValues>}
            rules={{ required: 'Country is required' }}
          />
          <span className="error">
            {formState.errors.selectedCountry && (
              <span>{formState.errors.selectedCountry.message}</span>
            )}
          </span>
          <input type="submit" value={'submit'} />
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookForm;
