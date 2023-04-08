import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  secondname: string;
  document: string;
  email: string;
  password: string;
  phone: string;
  obrasocialId: number | null;
}

const initialState: UserState = {
  name: "",
  secondname: "",
  document: "",
  email: "",
  password: "",
  phone: "",
  obrasocialId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export default userSlice.reducer;
