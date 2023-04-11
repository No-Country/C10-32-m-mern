import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  secondname: string;
  document: string;
  gender: string;
  processNumber: string;
  obraSocial: string;
  birthDate: string;
  email: string;
  code: string;
  password: string;
  phone: string;
  country: string;
  maritalState: string;
  obrasocialeId: number | null;
}

const initialState: UserState = {
  id: "",
  name: "",
  secondname: "",
  document: "",
  gender: "",
  processNumber: "",
  obraSocial: "",
  birthDate: "",
  email: "",
  code: "",
  password: "",
  phone: "",
  country: "",
  maritalState: "",
  obrasocialeId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSecondName: (state, action: PayloadAction<string>) => {
      state.secondname = action.payload;
    },
    setDocument: (state, action: PayloadAction<string>) => {
      state.document = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setProcessNumber: (state, action: PayloadAction<string>) => {
      state.processNumber = action.payload;
    },
    setObrasocial: (state, action: PayloadAction<string>) => {
      state.obraSocial = action.payload;
    },
    setBirthDate: (state, action: PayloadAction<string>) => {
      state.birthDate = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setMaritalState: (state, action: PayloadAction<string>) => {
      state.maritalState = action.payload;
    },
    setObrasocialeId: (state, action: PayloadAction<number | null>) => {
      state.obrasocialeId = action.payload;
    },
  },
});

export const {
  setId,
  setName,
  setSecondName,
  setDocument,
  setGender,
  setProcessNumber,
  setObrasocial,
  setBirthDate,
  setEmail,
  setCode,
  setPassword,
  setPhone,
  setCountry,
  setMaritalState,
  setObrasocialeId,
} = userSlice.actions;

export default userSlice.reducer;
