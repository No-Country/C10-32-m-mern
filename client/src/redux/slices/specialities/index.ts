import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Specialities {
  specialities: [{ id: number | null; description: string }];
}

const initialState: Specialities = {
  specialities: [{ id: null, description: "" }],
};

const specialitiesSlice = createSlice({
  name: "specialities",
  initialState,
  reducers: {
    setSpecialities: (state, action: PayloadAction<any>) => {
      state.specialities = action.payload;
    },
  },
});

export const { setSpecialities } = specialitiesSlice.actions;

export default specialitiesSlice.reducer;

export const specialitiesSeter =
  ({ sede }: any): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api-c1032mmern.onrender.com/api/specialiestbysede?idsede=${sede}`
      );
      console.log("la respuesta del slice", response.data);

      dispatch(setSpecialities(response.data[0].specialties));
      return response;
    } catch (error) {
      return error as AxiosError;
    }
  };
