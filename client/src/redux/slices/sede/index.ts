import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Sede {
  sede: { id: null | number; name: string };
}

const initialState: Sede = {
  sede: { id: null, name: "" },
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
