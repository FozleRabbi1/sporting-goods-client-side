import { baseApi } from "../../api/baseApi";

export const getAddToCartProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddToCartProduct: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["CartProducts"],
    }),
  }),
});
