import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  items: unknown;
};

const initialState = {
  items: [],
} as InitialState;

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});

export default wishListSlice.reducer;
