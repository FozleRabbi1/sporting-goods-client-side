import { baseApi } from "../api/baseApi";

export const allProducts = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      pollingInterval: 30000,
    }),
  }),
});
