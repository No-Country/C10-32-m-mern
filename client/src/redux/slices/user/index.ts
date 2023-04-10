import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  secondname: string;
  document: string;
  email: string;
  password: string;
  phone: string;
  obrasocialId: number | null;
}

const initialState: UserState = {
  id: "",
  name: "",
  secondname: "",
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
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setObrasocialId: (state, action: PayloadAction<number | null>) => {
      state.obrasocialId = action.payload;
    },
  },
});

export const {
  setId,
  setName,
  setSecondName,
  setDocument,
  setEmail,
  setPassword,
  setPhone,
  setObrasocialId,
} = userSlice.actions;

export default userSlice.reducer;
