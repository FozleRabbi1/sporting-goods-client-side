import { baseApi } from "../api/baseApi";

export const getSingleProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSintleProduct: builder.query({
      query: (id) => ({
        url: `/products/single-product/${id}`,
        method: "GET",
      }),
    }),
  }),
});
