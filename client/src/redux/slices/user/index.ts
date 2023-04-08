import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  secondname: string;
  document: string;
  email: string;
  password: string;
  phone: string;
  obrasocialId: number | null;
}

const initialState: UserState = {
  name: "matias",
  secondname: "barengo",
  document: "",
  email: "",
  password: "",
  phone: "",
  obrasocialId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSecondName: (state, action: PayloadAction<string>) => {
      state.secondname = action.payload;
    },
    setDocument: (state, action: PayloadAction<string>) => {
      state.document = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setObraSocialId: (state, action: PayloadAction<number | null>) => {
      state.obrasocialId = action.payload;
    },
  },
});

export default userSlice.reducer;
