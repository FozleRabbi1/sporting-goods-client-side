import { baseApi } from "../api/baseApi";

// export const RouterProduct = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllRouterProducts: builder.query({
//       query: (query) => {
//         console.log(query);
//         return {
//           url: `/products/all-products?searchTerm=${query}`,
//           method: "GET",
//         };
//       },
//     }),
//   }),
// });

// Adjust the endpoint to accept query parameters for category and price range
export const RouterProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRouterProducts: builder.query({
      query: ({ selectedCategory, minPrice, maxPrice, reating }) => {
        console.log(selectedCategory, minPrice, maxPrice);
        return {
          url: `/products/all-products`,
          method: "GET",
          params: {
            searchTerm: selectedCategory,
            minPrice: minPrice,
            maxPrice: maxPrice,
            reating,
          },
        };
      },
    }),
  }),
});
