import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishListApi = createApi({
  reducerPath: "wishListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllwishlist: builder.query({
      query: () => "/users/wishlist",
    }),
  }),
});

export const { useGetAllwishlistQuery } = wishListApi;
