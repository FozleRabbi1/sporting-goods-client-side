import { baseApi } from "../../api/baseApi";

export const getAddToCartProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddToCartProduct: builder.query({
      query: (incrementDecrement) => {
        const params = { incrementDecrement: incrementDecrement.join(",") };
        return {
          url: "/cart",
          method: "GET",
          params,
        };
      },
      providesTags: ["CartProducts"],
    }),
  }),
});
