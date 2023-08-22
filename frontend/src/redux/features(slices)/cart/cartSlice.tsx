import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type InitialState = {
    
}

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) 
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalTax:0,

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
                toast.success(`Added another ${action.payload.name} to cart`
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
        removeFromCart(state, action){
            const cartItemAfterRemove = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = cartItemAfterRemove
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.info(`Removed ${action.payload.name} from cart`)
        },
        increaseItem(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            state.cartItems[itemIndex].cartQuantity += 1
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.info(`Added one more ${action.payload.name} to cart`)
        },
        decreaseItem(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.name} from cart`)
            }
            else {
                const cartItemAfterRemove = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = cartItemAfterRemove
                toast.info(`Removed ${action.payload.name} from cart`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotal(state, action) {
            let {total, quantity, tax} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem
                const itemTotal = price * cartQuantity
                const taxTotal = itemTotal * 0.15
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                cartTotal.tax += taxTotal

                return cartTotal
            },{
                total: 0,
                quantity: 0,
                tax:0,
            })
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
            state.cartTotalTax = tax
        }
    },


})

export const {addToCart, removeFromCart, increaseItem, decreaseItem, getTotal} = CartSlice.actions
export default CartSlice.reducer
