import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type InitialState = {};

const initialState = {
  wishList: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
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
        toast.error(
          `${action.payload.name} is already in your wishlist.`
          // {position: "bottom-center"}
        );
      } else {
        const tempProduct = { ...action.payload };
        state.wishList.push(tempProduct);
        toast.info(`${action.payload.name} added to wishlist`);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
      console.log(state);
    },
  },
});

export const { addToWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
