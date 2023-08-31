import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/category",
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
