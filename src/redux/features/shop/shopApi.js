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
      invalidatesTags: ["shops"],
    }),

    //* Get all address of shop :
    getShopAddress: builder.query({
      query: () => ({
        url: "/shops/shop-address",
        method: "GET",
        providesTags: ["shops"],
      }),
    }),

    //* Get My-shop :
    getMyShop: builder.query({
      query: () => ({
        url: "/shops/my-shop",
        method: "GET",
        providesTags: ["shops"],
      }),
    }),
  }),
});

export const {
  useCreateShopMutation,
  useGetShopAddressQuery,
  useGetMyShopQuery,
} = shopApi;
