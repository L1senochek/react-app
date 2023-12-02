import { useState, useEffect } from 'react';
import { useController, FieldValues, Control } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedCountry } from '@/store/slices/reactHookFormSlice';
import { IFormValues } from '@/model/FormValuesState';

interface IAutoCompleteHookProps<
  TFieldValues extends FieldValues = IFormValues,
> {
  label: string;
  name: keyof TFieldValues;
  control: Control<IFormValues>;
  rules: { required: string };
}

const AutoCompleteHook = ({
  label,
  name,
  control,
  rules,
  ...rest
}: IAutoCompleteHookProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const selectedCountry = useAppSelector(
    (state) => state.reactHookForm.currentForm.values.selectedCountry
  );
  const countries = useAppSelector(
    (state) => state.reactHookForm.currentForm.values.countries
  );

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: { ...rules },
  });

  useEffect(() => {
    const filtered = countries.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, countries]);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...rest}
        value={(field.value as string) || ''}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          field.onChange(e.target.value);
        }}
      />
      {filteredOptions.length > 0 && (
        <div>
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => {
                field.onChange(option);
                dispatch(setSelectedCountry(selectedCountry));
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AutoCompleteHook;
