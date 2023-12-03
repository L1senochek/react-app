import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setArrFormState, setName } from '@/store/slices/uncontroledFormSlice';
import { RootState } from '@/store/store';
import schema from '@/utils/validation/schema';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import * as yup from 'yup';

interface IFormErrors {
  name?: string;
  age?: string;
}

const UncontroledForm: FC = (): JSX.Element => {
  const formRef = useRef(null);
  const [formErrors, setFormErrors] = useState<IFormErrors>({});

  const uncontroledFormValue = useAppSelector(
    (state: RootState) => state.ucontroledForm.currentForm
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setName('UncontroledForm'));
    console.log(uncontroledFormValue, 'uncontroledFormValue');
  }, [dispatch, uncontroledFormValue]);

  console.log(uncontroledFormValue);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);
    console.log(formRef.current, formData, 'formRef.current');

    const data: Record<string, string | File> = {};
    formData.forEach((value, key: string) => {
      data[key] = value;
      console.log(value, key, data, 'value');
    });

    schema
      .validate(data, { abortEarly: false })
      .then((validData) => {
        console.log(validData, 'validData');
      })
      .catch((validationErrors) => {
        setFormErrors(
          validationErrors.inner.reduce(
            (errors: object, error: yup.ValidationError) => ({
              ...errors,
              [error.path!]: error.message,
            }),
            {}
          )
        );
      });
  };

  return (
    <div className="uncontrolled-form">
      <h2 onClick={() => dispatch(setArrFormState())}>UncontroledForm</h2>
      <form ref={formRef}>
        <label>Name:</label>
        <input name="name" />
        <p>{formErrors.name}</p>
        <p>{formErrors.age}</p>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontroledForm;
