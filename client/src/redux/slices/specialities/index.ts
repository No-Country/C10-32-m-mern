import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Specialities {
  specialities: {};
}

const initialState: Specialities = {
  specialities: {},
};

const specialitiesSlice = createSlice({
  name: "specialities",
  initialState,
  reducers: {
    setSpecialities: (state, action: PayloadAction<object>) => {
      state.specialities = action.payload;
    },
  },
});

export const { setSpecialities } = specialitiesSlice.actions;

export default specialitiesSlice.reducer;
