import { api } from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["login"],
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
        providesTags: ["profile"],
      }),
    }),
    updateProfile: builder.mutation({
      query: (updatedData) => ({
        url: "/users/my-profile",
        method: "PATCH",
        body: updatedData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
