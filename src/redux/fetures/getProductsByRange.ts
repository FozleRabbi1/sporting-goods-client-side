import { baseApi } from "../api/baseApi";

export const getProductsByRange = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByRange: builder.query({
      query: (query) => {
        return {
          url: `/products/getProductsByRange?range=${query}`,
          method: "GET",
        };
      },
    }),
  }),
});
