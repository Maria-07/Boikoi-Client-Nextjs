import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* create a book
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),

    //* Get all My Books :
    getAllMyBooks: builder.query({
      query: ({ mail }) => ({
        url: `/books?userEmail=${mail}`,
        method: "GET",
        providesTags: ["books"],
      }),
    }),
  }),
});

export const { useCreateBookMutation, useGetAllMyBooksQuery } = bookApi;
