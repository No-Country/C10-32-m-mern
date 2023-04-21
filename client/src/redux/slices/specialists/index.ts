import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setSpecialists: (state, action: PayloadAction<object>) => {
      state.specialists = action.payload;
    },
  },
});

export const { setSpecialists } = specialistsSlice.actions;

export default specialistsSlice.reducer;
