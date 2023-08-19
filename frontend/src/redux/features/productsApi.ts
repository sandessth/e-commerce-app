import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/products"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        })
    })
})