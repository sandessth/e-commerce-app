import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type InitialState = {};

const initialState = {
  wishList: localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [],
} as InitialState;

const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.error(`${action.payload.name} is already in your wishlist.`);
      } else {
        const tempProduct = { ...action.payload };
        state.wishList.push(tempProduct);
        toast.info(`${action.payload.name} added to wishlist`);
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
      console.log(state);
    },
    checkWishList(state, action) {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.error(`${action.payload.name} is already in your wishlist.`);
      } else {
        const tempProduct = { ...action.payload };
        state.wishList.push(tempProduct);
        toast.info(`${action.payload.name} added to wishlist`);
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
      console.log(state);
    },
    removeFromWishList(state, action) {
      const wishListAfterRemove = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishList = wishListAfterRemove;
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
      toast.error(`Removed ${action.payload.name} from wishlist`);
    },
  },
});

export const { addToWishList, removeFromWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
