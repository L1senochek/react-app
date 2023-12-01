import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '@/model/FormValuesState';

const initialState: FormState = {
  values: {
    name: '',
    age: 0,
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isValidPas: false,
    gender: 'male',
    acceptTC: false,
    image: '',
    isValidImage: false,
    country: '',
  },
  errors: {},
  isSubmitting: false,
  passwordStrength: {
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
  },
};

const reactHookFormSlice = createSlice({
  name: 'reactHookFormValue',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.values.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.values.age = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.values.email = action.payload;
    },
    setPasswordOne: (state, action: PayloadAction<string>) => {
      state.values.passwordOne = action.payload;
    },
    setPasswordTwo: (state, action: PayloadAction<string>) => {
      state.values.passwordTwo = action.payload;
    },
    setIsValidPas: (state, action: PayloadAction<boolean>) => {
      state.values.isValidPas = action.payload;
    },
    setGender: (state, action: PayloadAction<'male' | 'female' | 'other'>) => {
      state.values.gender = action.payload;
    },
    setAcceptTC: (state, action: PayloadAction<boolean>) => {
      state.values.acceptTC = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.values.country = action.payload;
    },
    setImage: (
      state,
      action: PayloadAction<{ image: string; isValidImage: boolean }>
    ) => {
      state.values.image = action.payload.image;
      state.values.isValidImage = action.payload.isValidImage;
    },
    resetForm: () => initialState,
  },
});

export const { setName, setAge, setEmail, setPasswordOne, resetForm } =
  reactHookFormSlice.actions;
export default reactHookFormSlice;
