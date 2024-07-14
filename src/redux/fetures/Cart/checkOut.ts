import { baseApi } from "../../api/baseApi";
import qs from "qs";

export const checkOutProducts = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkOut: builder.mutation({
      query: (data) => {
        const params = qs.stringify({ data }, { arrayFormat: "brackets" });
        return {
          url: "/cart",
          method: "PATCH",
          params: params,
        };
      },
      invalidatesTags: ["CartProducts"],
    }),
  }),
});
