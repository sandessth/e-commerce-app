import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

} as InitialState

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0)
            {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else
            {
                const tempPorduct = {...action.payload, cartQuantity:1}
                state.cartItems.push(action.payload)
            }
            
        },
    },


})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer
