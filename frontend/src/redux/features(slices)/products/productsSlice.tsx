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
        return response
    }
)

const productsSlice = createSlice ({
    name: "products",
    initialState: productsFetch,
    reducers: {},
    
})

export default productsSlice.reducer