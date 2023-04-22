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
    },
  ],
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

export const daySeter =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post(
        "https://api-c1032mmern.onrender.com/api/getshifts",
        {
          idspecialist: 2,
          idsede: 5,
          idspeciality: 1,
          days: 7,
        }
      );
      console.log(response);
      dispatch(setDate(response.data));
    } catch (error) {
      return error as AxiosError;
    }
  };
