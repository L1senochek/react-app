import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormArrState, FormState } from '@/model/FormValuesState';

const initialCurrentForm: FormState = {
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

const initialState: FormArrState = {
  currentForm: initialCurrentForm,
  arrFormState: [],
  indexArrFormState: 0,
};

const reactHookFormSlice = createSlice({
  name: 'reactHookFormValue',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.currentForm.values.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.currentForm.values.age = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.currentForm.values.email = action.payload;
    },
    setPasswordOne: (state, action: PayloadAction<string>) => {
      state.currentForm.values.passwordOne = action.payload;
    },
    setPasswordTwo: (state, action: PayloadAction<string>) => {
      state.currentForm.values.passwordTwo = action.payload;
    },
    setIsValidPas: (state, action: PayloadAction<boolean>) => {
      state.currentForm.values.isValidPas = action.payload;
    },
    setGender: (state, action: PayloadAction<'male' | 'female' | 'other'>) => {
      state.currentForm.values.gender = action.payload;
    },
    setAcceptTC: (state, action: PayloadAction<boolean>) => {
      state.currentForm.values.acceptTC = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.currentForm.values.country = action.payload;
    },
    setImage: (
      state,
      action: PayloadAction<{ image: string; isValidImage: boolean }>
    ) => {
      state.currentForm.values.image = action.payload.image;
      state.currentForm.values.isValidImage = action.payload.isValidImage;
    },
    resetArrForms: () => initialState,
    setArrFormState: (state) => {
      state.arrFormState.push({ ...state.currentForm });
    },
    setIndexArrFormState: (state, action: PayloadAction<number>) => {
      state.indexArrFormState = action.payload;
    },
  },
});

export const {
  setName,
  setAge,
  setEmail,
  setPasswordOne,
  setPasswordTwo,
  setIsValidPas,
  setGender,
  setAcceptTC,
  setCountry,
  setImage,
  resetArrForms,
  setArrFormState,
  setIndexArrFormState,
} = reactHookFormSlice.actions;
export default reactHookFormSlice;
