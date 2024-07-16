// import { baseApi } from "../../api/baseApi";
// import qs from "qs";

// export const checkOutProducts = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     checkOut: builder.mutation({
//       query: (data) => {
//         const params = qs.stringify({ data }, { arrayFormat: "brackets" });
//         return {
//           url: "/cart",
//           method: "PATCH",
//           params: params,
//         };
//       },
//       invalidatesTags: ["CartProducts"],
//     }),
//   }),
// });

import { baseApi } from "../../api/baseApi";

export const checkOutProducts = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkOut: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/cart",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["CartProducts"],
    }),
  }),
});
