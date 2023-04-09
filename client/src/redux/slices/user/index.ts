import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Thunk } from "../../store";

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
  setName,
  setSecondName,
  setDocument,
  setEmail,
  setPassword,
  setPhone,
  setObrasocialId,
} = userSlice.actions;

export default userSlice.reducer;

export const register =
  (data: UserState): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post("http://localhost:3000/api/signup", data);
      dispatch(setName(response.data.name));
      dispatch(setSecondName(response.data.secondname));
      dispatch(setDocument(response.data.document));
      dispatch(setEmail(response.data.email));
      dispatch(setPassword(response.data.password));
      dispatch(setPhone(response.data.phone));
      dispatch(setObrasocialId(response.data.obrasocialId));
      return response;
    } catch (error) {
      return error as AxiosError;
    }
  };
