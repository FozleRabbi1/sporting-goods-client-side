import { baseApi } from "../../api/baseApi";

export const addToCart = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart/addToCart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CartProducts"], 
    }),
  }),
});

