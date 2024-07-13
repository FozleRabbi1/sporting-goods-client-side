import { baseApi } from "../../api/baseApi";

export const getAddToCartProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddToCartProduct: builder.query({
      query: (incrementDecrement) => {
        const queryString = JSON.stringify(incrementDecrement);
        return {
          url: "/cart",
          method: "GET",
          params: {
            incrementDecrement: queryString,
          },
        };
      },
      providesTags: ["CartProducts"],
    }),
  }),
});
