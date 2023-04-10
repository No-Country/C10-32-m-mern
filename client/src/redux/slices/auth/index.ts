import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import { Thunk } from "../../store";
import {
  setDocument,
  setEmail,
  setId,
  setName,
  setObrasocialId,
  setPassword,
  setPhone,
  setSecondName,
} from "../user";

export interface Login {
  email: string;
  password: string;
}

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAccessToken, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.post("http:/localhost:3000/api/signin", { data });
      dispatch(setAccessToken(response.data.AUTH_TOKEN));
      dispatch(setId(response.data.id));
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
    } finally {
      dispatch(setIsLoading(false));
    }
  };
