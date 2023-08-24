import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "@/redux/features(slices)/products/productsSlice";
import { productsApi } from "../features(slices)/products/productsApi";
import cartReducer from "../features(slices)/cart/cartSlice";
import userReducer from "../features(slices)/users/userSlice";
import { userApi } from "../features(slices)/users/userApi";
// import { wishListApi } from "../features(slices)/wishlist/wishlistApi";
import wishListReducer from "../features(slices)/wishlist/wishListSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
