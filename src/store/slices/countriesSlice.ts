import {initialCountries} from "@/utils/constants/constants.ts";
import {createSlice} from "@reduxjs/toolkit";

interface CountriesState {
  countries: string[]
}

const initialState: CountriesState = {
  countries: initialCountries
}

const  countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {}
})

export default countriesSlice;
