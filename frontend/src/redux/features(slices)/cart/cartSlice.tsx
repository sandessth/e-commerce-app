import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type InitialState = {
    
}

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) 
    : [],
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
                toast.info(`Added another ${action.payload.name} to cart`, 
                // {position: "bottom-center"}
                )
            }
            else
            {
                const tempPorduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempPorduct)
                toast.info(`${action.payload.name} added to cart`)
            }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
    },


})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer
