import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Specialists {
  specialists: [
    {
      id: number | null;
      description: string;
      specialists: [{ id: number | null; name: string }];
    }
  ];
}

const initialState: Specialists = {
  specialists: [
    {
      id: null,
      description: "",
      specialists: [{ id: null, name: "" }],
    },
  ],
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

export const specialistSeter =
  (specialityId: any): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      console.log("id del slice", specialityId);

      const response: AxiosResponse = await axios.get(
        `https://api-c1032mmern.onrender.com/api/specialistbyspeciality/${specialityId}`
      );
      console.log(response.data);
      dispatch(setSpecialists(response.data));
    } catch (error) {
      return error as AxiosError;
    }
  };
