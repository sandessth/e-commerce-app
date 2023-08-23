import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  items: unknown;
  status: unknown;
};

const initialState = {
  items: [],
  status: null,
} as InitialState;

const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
