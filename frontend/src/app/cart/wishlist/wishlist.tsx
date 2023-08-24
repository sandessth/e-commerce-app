import { useGetAllwishlistQuery } from "@/redux/features(slices)/wishlist/wishlistApi";
import React from "react";

function WishList() {
  const { data, error, isLoading } = useGetAllwishlistQuery();
  console.log(data);

  return <div>WishList</div>;
}

export default WishList;
