import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "@/redux/features(slices)/products/productsSlice";
import { productsApi } from "../features(slices)/products/productsApi";
import cartReducer from "../features(slices)/cart/cartSlice";
import userReducer from "../features(slices)/users/userSlice";
import { userApi } from "../features(slices)/users/userApi";
import { wishListApi } from "../features(slices)/wishlist/wishlistApi";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [wishListApi.reducerPath]: wishListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      userApi.middleware,
      wishListApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
