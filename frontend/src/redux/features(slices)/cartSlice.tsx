import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
    
}

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

} as InitialState

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }


})

export default CartSlice.reducer
