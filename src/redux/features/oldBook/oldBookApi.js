import { api } from "@/redux/api/apiSlice";

const oldBookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* create a book
    createOldBook: builder.mutation({
      query: (bookData) => ({
        url: "/oldBooks",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["oldBooks"],
    }),

    //* Get all Books :
    getAllOldBooks: builder.query({
      query: () => ({
        url: `/oldBooks`,
        method: "GET",
        providesTags: ["oldBooks"],
      }),
    }),

    //* Get all Filterable Books :
    getAllFilterableOldBooks: builder.query({
      query: ({
        authorName,
        publisherName,
        genre,
        classLevel,
        facultyName,
        lastEdition,
        searchTerm,
      }) => {
        let url = "/oldBooks";
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
      providesTags: ["oldBooks"],
    }),

    // //* Get all My Books :
    // getAllMyBooks: builder.query({
    //   query: ({ mail }) => ({
    //     url: `/books?userEmail=${mail}`,
    //     method: "GET",
    //     providesTags: ["books"],
    //   }),
    // }),

    // //* Get a single Book
    // getSingleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    //   providesTags: ["books"],
    // }),

    // //* Update a book
    // updateBook: builder.mutation({
    //   query: ({ id, bookData }) => ({
    //     url: `/books/${id}`,
    //     method: "PATCH",
    //     body: bookData,
    //   }),
    //   invalidatesTags: ["books"],
    // }),

    // //* Delete a Book
    // deleteBook: builder.mutation({
    //   query: ({ id }) => ({
    //     url: `/books/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["books"],
    // }),
  }),
});

export const {
  useCreateOldBookMutation,
  useGetAllOldBooksQuery,
  useGetAllFilterableOldBooksQuery,
} = oldBookApi;
