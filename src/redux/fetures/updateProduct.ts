import { baseApi } from "../api/baseApi";

export const updateProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["mainProducts"],
    }),
  }),
});
