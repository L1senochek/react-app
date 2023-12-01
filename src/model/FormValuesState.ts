type FormValuesState = {
  name: string;
  age: number;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  isValidPas: boolean;
  gender: 'male' | 'female' | 'other';
  acceptTC: boolean;
  image: string;
  isValidImage: boolean;
  country: string;
};

type FormErrors = {
  [key in keyof FormValuesState]?: string;
};

type FormValidation = {
  [key in keyof FormValuesState]?: (
    value: FormValuesState[key]
  ) => string | undefined;
};

type PasswordStrength = {
  hasNumber: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasSpecialChar: boolean;
};

type RootState = {
  countries: string[];
};

type FormState = {
  values: FormValuesState;
  errors: FormErrors;
  isSubmitting: boolean;
  passwordStrength: PasswordStrength;
};

type FormArrState = {
  currentForm: FormState;
  arrFormState: FormState[];
  indexArrFormState: number | null;
};

export type {
  FormValuesState,
  FormErrors,
  FormValidation,
  PasswordStrength,
  RootState,
  FormState,
  FormArrState,
};
