import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
    items: unknown
    status: unknown
}

const initialState = {
    items: [],
    status: null,
} as InitialState

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("http://localhost:4000/products")
        return response?.data
    }
)

const productsSlice = createSlice ({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.pending]: (state, action) => {
            state.status = "rejected"
        }
    }
})

export default productsSlice.reducer