import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thunk } from "../../store";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface Date {
  date: [[
    
    {
      fecha: string;
    },
    {
      aux: [
        {
          ini: string;
        },
        {
          fin: string;
        }
      ],
    }
  ]
  ];
}

const initialState: Date = {
  date: [[
    {
      fecha: "",
    },
    {
      aux: [
        {
          ini: ""
        },
        {
          fin: ""
        },
      ],
    }

  ]
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
  (idspecialist, idsede, idspeciality): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post(
        "https://api-c1032mmern.onrender.com/api/getshifts",
        {
          idspecialist,
          idsede,
          idspeciality,
          days: 7,
        }
      );
      console.log('shifts en dateSlice',response);
      dispatch(setDate(response.data));
    } catch (error) {
      return error as AxiosError;
    }
  };
