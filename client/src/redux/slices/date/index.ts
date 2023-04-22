import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Date {
  date: [
    {
      day: string;
    }
  ];
}

const initialState: Date = {
  date: [
    {
      day: "",
    }
  ]
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<any>) => {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
