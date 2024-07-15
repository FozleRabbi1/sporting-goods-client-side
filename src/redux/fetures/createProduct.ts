import { baseApi } from "../api/baseApi";

export const createProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["mainProducts"],
    }),
  }),
});
