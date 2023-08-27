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

    //* Get all  shop :
    getAllShop: builder.query({
      query: () => ({
        url: "/shops",
        method: "GET",
        providesTags: ["shops"],
      }),
    }),

    //* Get all Filterable Shop :
    getAllFilterableShops: builder.query({
      query: ({ street, area, city, location, searchTerm }) => {
        let url = "/shops";
        let queryParameters = "";

        if (city) {
          queryParameters += `&address.city=${city}`;
        }
        if (area) {
          queryParameters += `&address.area=${area}`;
        }
        if (street) {
          queryParameters += `&address.street=${street}`;
        }
        if (location) {
          queryParameters += `&location=${location}`;
        }
        if (searchTerm) {
          queryParameters += `&searchTerm=${searchTerm}`;
        }

        if (queryParameters) {
          url += `?${queryParameters.substring(1)}`;
        }

        return url;
      },
      providesTags: ["shops"],
    }),

    //* Get a single shop
    getSingleShop: builder.query({
      query: (id) => `/shops/${id}`,
      providesTags: ["shops"],
    }),

    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    //   providesTags: ["newBook"],
    // }),

    //* Get My-shop :
    getMyShop: builder.query({
      query: () => ({
        url: "/shops/my-shop",
        method: "GET",
        providesTags: ["shops"],
      }),
    }),

    //* Update a shop
    updateShop: builder.mutation({
      query: ({ id, shopData }) => ({
        url: `/shops/${id}`,
        method: "PATCH",
        body: shopData,
      }),
      invalidatesTags: ["shops"],
    }),

    //* Delete a shop
    deleteShop: builder.mutation({
      query: ({ id }) => ({
        url: `/shops/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shops"],
    }),
  }),
});

export const {
  useCreateShopMutation,
  useGetShopAddressQuery,
  useGetAllFilterableShopsQuery,
  useGetAllShopQuery,
  useGetSingleShopQuery,
  useGetMyShopQuery,
  useUpdateShopMutation,
  useDeleteShopMutation,
} = shopApi;
