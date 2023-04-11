import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import { Thunk } from "../../store";
import {
  setDocument,
  setEmail,
  setId,
  setName,
  setObrasocialeId,
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
  ({ email, password }: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.post("http://localhost:3000/api/signin", {
        email,
        password,
      });
      dispatch(setAccessToken(response.headers.AUTH_TOKEN));
      dispatch(setId(response.data[0].id));
      dispatch(setName(response.data[0].name));
      dispatch(setSecondName(response.data[0].secondname));
      dispatch(setDocument(response.data[0].document));
      dispatch(setEmail(response.data[0].email));
      dispatch(setPassword(response.data[0].password));
      dispatch(setPhone(response.data[0].phone));
      dispatch(setObrasocialeId(response.data[0].obrasocialeId));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
