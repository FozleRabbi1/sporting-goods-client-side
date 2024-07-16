import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sporting-goods-server-eta.vercel.app/api/v1",
  }),
  tagTypes: ["CartProducts", "mainProducts"],
  endpoints: () => ({}),
});
