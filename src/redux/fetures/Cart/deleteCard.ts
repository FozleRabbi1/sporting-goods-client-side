import { baseApi } from "../../api/baseApi";

export const deleteCartFun = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CartProducts"],
    }),
  }),
});
