import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
    items: unknown
    status: unknown
}

const initialState = {
    items: [],
    status: null,
} as InitialState

const CartSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }


})

export default CartSlice.reducer
