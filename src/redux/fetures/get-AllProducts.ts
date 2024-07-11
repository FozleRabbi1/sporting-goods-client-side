import { baseApi } from "../api/baseApi";

export const RouterProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRouterProducts: builder.query({
      query: (query) => {
        console.log(query);
        return {
          url: `/products/all-products?searchTerm=${query}`,
          method: "GET",
        };
      },
    }),
  }),
});
