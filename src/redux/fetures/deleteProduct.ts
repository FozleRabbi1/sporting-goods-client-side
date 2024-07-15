import { baseApi } from "../api/baseApi";

export const deleteProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mainProducts"],
    }),
  }),
});
