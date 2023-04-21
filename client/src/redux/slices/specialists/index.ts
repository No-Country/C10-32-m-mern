import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Specialists {
  specialists: {};
}

const initialState: Specialists = {
  specialists: {},
};

const specialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {
    setSpecialists: (state, action: PayloadAction<any>) => {
      state.specialists = action.payload;
    },
  },
});

export const { setSpecialists } = specialistsSlice.actions;

export default specialistsSlice.reducer;

// export const specialistSeter =
//   (): Thunk =>
//   async (dispatch): Promise<AxiosResponse | AxiosError> => {
//     try {
//       const response: AxiosResponse = await axios.get("");
//     } catch (error) {}
//   };
