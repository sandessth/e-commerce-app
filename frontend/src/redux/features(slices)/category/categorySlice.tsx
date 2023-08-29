import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  category: unknown;
};

const initialState = {
  category: "",
} as InitialState;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
