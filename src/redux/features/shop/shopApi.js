import { api } from "@/redux/api/apiSlice";

const shopApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* create a shop
    createShop: builder.mutation({
      query: (shopData) => ({
        url: "/shops",
        method: "POST",
        body: shopData,
      }),
    }),
  }),
});

export const { useCreateShopMutation } = shopApi;
