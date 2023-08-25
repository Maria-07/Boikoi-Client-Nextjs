// import { BASE_URL } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const getAccessToken = () => {
  return Cookies.get("accessToken");
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, {}) => {
      const token = getAccessToken();
      if (token) {
        headers.set("authorization", token);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["profile", "login", "blogs", "shops"],
  endpoints: () => ({}),
});
