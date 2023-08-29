import { createSlice } from "@reduxjs/toolkit";

// type InitialState = {
//   category: "string"
// };

const initialState = {
  category: "string",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
