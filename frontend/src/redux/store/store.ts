import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "@/redux/features(slices)/products/productsSlice";
import { productsApi } from "../features(slices)/products/productsApi";
import cartReducer from "../features(slices)/cart/cartSlice";
import userReducer from "../features(slices)/users/userSlice";
import { userApi } from "../features(slices)/users/userApi";
// import { wishListApi } from "../features(slices)/wishlist/wishlistApi";
import wishListReducer from "../features(slices)/wishlist/wishListSlice";
import categoryReducer from "../features(slices)/category/categorySlice";
import { categoryApi } from "../features(slices)/category/catApi";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      userApi.middleware,
      categoryApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
