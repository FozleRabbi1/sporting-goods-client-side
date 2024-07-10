import { baseApi } from "../api/baseApi";

export const AllCategories = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (categories) => ({
        url: `/products/${categories}`,
        method: "GET",
      }),
    }),
  }),
});
