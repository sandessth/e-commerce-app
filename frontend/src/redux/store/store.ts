import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "@/redux/features(slices)/products/productsSlice"
import { productsApi } from "../features(slices)/products/productsApi";
import cartReducer from "../features(slices)/cart/cartSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
