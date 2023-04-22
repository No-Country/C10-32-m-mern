import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Sede {
  sede: {};
}

const initialState: Sede = {
  sede: {},
};

const sedeSlice = createSlice({
  name: "sede",
  initialState,
  reducers: {
    setSede: (state, action: PayloadAction<any>) => {
      state.sede = action.payload;
    },
  },
});

export const { setSede } = sedeSlice.actions;

export default sedeSlice.reducer;