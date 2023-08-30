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

    //* Get all Books :
    getAllBooks: builder.query({
      query: () => ({
        url: `/books`,
        method: "GET",
        providesTags: ["books"],
      }),
    }),

    //* Get all Filterable Books :
    getAllFilterableBooks: builder.query({
      query: ({
        authorName,
        publisherName,
        genre,
        classLevel,
        facultyName,
        isSale,
        lastEdition,
        searchTerm,
      }) => {
        let url = "/books";
        let queryParameters = "";

        if (authorName) {
          queryParameters += `&author_name=${authorName}`;
        }
        if (publisherName) {
          queryParameters += `&publisher_name=${publisherName}`;
        }
        if (genre) {
          queryParameters += `&genre=${genre}`;
        }
        if (classLevel) {
          queryParameters += `&class_level=${classLevel}`;
        }
        if (facultyName) {
          queryParameters += `&faculty_name=${facultyName}`;
        }
        if (isSale) {
          queryParameters += `&is_sale=${isSale}`;
        }
        if (lastEdition) {
          queryParameters += `&Last_edition=${lastEdition}`;
        }
        if (searchTerm) {
          queryParameters += `&searchTerm=${searchTerm}`;
        }

        if (queryParameters) {
          url += `?${queryParameters.substring(1)}`;
        }

        return url;
      },
      providesTags: ["books"],
    }),

    //* Get all My Books :
    getAllMyBooks: builder.query({
      query: ({ mail }) => ({
        url: `/books?userEmail=${mail}`,
        method: "GET",
        providesTags: ["books"],
      }),
    }),

    //* Get a single Book
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),

    //* Update a book
    updateBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),

    //* Delete a Book
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    //* post a book review
    postBookReview: builder.mutation({
      query: ({ id, reviews }) => ({
        url: `/books/${id}/reviews`,
        method: "POST",
        body: reviews,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetAllFilterableBooksQuery,
  useGetAllMyBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  usePostBookReviewMutation,
} = bookApi;
