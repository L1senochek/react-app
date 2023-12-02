import { useForm, FormProvider, Control, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/store/hooks';
import {
  setAge,
  setArrFormState,
  setEmail,
  setGender,
  setImage,
  setImg,
  setName,
  setPasswordOne,
} from '@/store/slices/reactHookFormSlice';
import { FC, useState } from 'react';
import styles from './react-hook-form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormValues } from '@/model/FormValuesState';
import AutoCompleteHook from '@/components/AutocompleteHook/AutoCompleteHook';
import schema from '@/utils/validation/schema';
import EyeOff from '@/components/EyeForPassword/EyeOff';
import EyeOn from '@/components/EyeForPassword/EyeOn';

const ReactHookForm: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { register, handleSubmit, formState, control } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result as string;
      dispatch(setImage({ image: base64Image, isValidImage: true }));
      dispatch(setImg(reader.result as string));
    };

    if (data.image instanceof FileList) {
      reader.readAsDataURL(data.image[0]);
    }

    if (
      data.name &&
      data.age &&
      data.email &&
      data.passwordOne &&
      data.gender
    ) {
      dispatch(setName(data.name));
      dispatch(setAge(data.age));
      dispatch(setEmail(data.email));
      dispatch(setPasswordOne(data.passwordOne));
      dispatch(setGender(data.gender));
    }

    dispatch(setArrFormState());
  };

  return (
    <div className={styles['react-hook-form']}>
      <h2 onClick={() => dispatch(setArrFormState())}>ReactHookForm</h2>
      <FormProvider {...methods}>
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles['form__label']}>Name:</label>
          <input
            className={`${styles['form__input']} ${
              formState.errors.name ? styles['error-input'] : ''
            }`}
            placeholder={'Name'}
            {...register('name')}
          />
          <p className={styles['form__error']}>
            {formState.errors.name && (
              <span className={styles['form__error_message']}>
                {formState.errors.name.message}
              </span>
            )}
          </p>
          <label className={styles['form__label']}>Age:</label>
          <input
            placeholder={'Age'}
            {...register('age')}
            type="number"
            className={`${styles['form__input']} ${
              formState.errors.age ? styles['error-input'] : ''
            }`}
          />
          <p className={styles['form__error']}>
            {formState.errors.age && (
              <span className={styles['form__error_message']}>
                {formState.errors.age.message}
              </span>
            )}
          </p>
          <label className={styles['form__label']}>Email:</label>
          <input
            placeholder={'Email'}
            {...register('email')}
            className={`${styles['form__input']} ${
              formState.errors.email ? styles['error-input'] : ''
            }`}
          />
          <p className={styles['form__error']}>
            {formState.errors.email && (
              <span className={styles['form__error_message']}>
                {formState.errors.email.message}
              </span>
            )}
          </p>
          <label className={styles['form__label']}>Password</label>
          <div
            className={`${styles['form__password']} ${
              formState.errors.passwordOne ? styles['error-input'] : ''
            }`}
          >
            <input
              {...register('passwordOne')}
              type={showPassword ? 'text' : 'password'}
              placeholder={'Password'}
              autoComplete="false"
              className={styles['form__password_input']}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles['form__password_btn']}
            >
              {showPassword ? <EyeOn /> : <EyeOff />}
            </button>
          </div>
          <p className={styles['form__error']}>
            {formState.errors.passwordOne && (
              <span className={styles['form__error_message']}>
                {formState.errors.passwordOne.message}
              </span>
            )}
          </p>
          <label className={styles['form__label']}>Confirm Password</label>
          <div
            className={`${styles['form__password']} ${
              formState.errors.passwordTwo ? styles['error-input'] : ''
            }`}
          >
            <input
              {...register('passwordTwo')}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder={'Confirm Password'}
              autoComplete="false"
              className={styles['form__password_input']}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={styles['form__password_btn']}
            >
              {showConfirmPassword ? <EyeOn /> : <EyeOff />}
            </button>
          </div>
          <p className={styles['form__error']}>
            {formState.errors.passwordTwo && (
              <span className={styles['form__error_message']}>
                {formState.errors.passwordTwo.message}
              </span>
            )}
          </p>
          <div className={styles['form__gender']}>
            <label className={styles['form__gender_item']}>
              Male
              <input type="radio" value="male" {...register('gender')} />
            </label>
            <label className={styles['form__gender_item']}>
              Female
              <input type="radio" value="female" {...register('gender')} />
            </label>
            <label className={styles['form__gender_item']}>
              Other
              <input type="radio" value="other" {...register('gender')} />
            </label>
          </div>
          <p className={styles['form__error']}>
            {formState.errors.gender && (
              <span className={styles['form__error_message']}>
                {formState.errors.gender.message}
              </span>
            )}
          </p>
          <label className={styles['form__label']}>
            Accept Terms & Conditions
            <input type="checkbox" {...register('acceptTC')} />
          </label>
          <label className={styles['form__label']}>Image:</label>
          <input
            {...register('image')}
            type="file"
            accept="image/jpeg, image/png"
            className={styles['form__img']}
          />
          <p className={styles['form__error']}>
            {formState.errors.image && (
              <span className={styles['form__error_message']}>
                {formState.errors.image.message}
              </span>
            )}
          </p>
          <AutoCompleteHook
            label="Country"
            name="selectedCountry"
            control={control as Control<IFormValues>}
            rules={{ required: 'Country is required' }}
            error={formState.errors.selectedCountry}
          />
          <p className={styles['form__error']}>
            {formState.errors.selectedCountry && (
              <span className={styles['form__error_message']}>
                {formState.errors.selectedCountry.message}
              </span>
            )}
          </p>
          <input
            className={styles['form__submit']}
            type="submit"
            value={'submit'}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookForm;
