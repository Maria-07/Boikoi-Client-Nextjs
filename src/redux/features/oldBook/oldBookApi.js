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

    //* Get all My Books :
    getAllMyOldBooks: builder.query({
      query: ({ mail }) => ({
        url: `/oldBooks?userEmail=${mail}`,
        method: "GET",
        providesTags: ["oldBooks"],
      }),
    }),

    //* Get a single Book
    getSingleOldBook: builder.query({
      query: (id) => `/oldBooks/${id}`,
      providesTags: ["oldBooks"],
    }),

    //* Update a book
    updateOldBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/oldBooks/${id}`,
        method: "PATCH",
        body: bookData,
      }),
      invalidatesTags: ["oldBooks"],
    }),

    //* Delete a Book
    deleteOldBook: builder.mutation({
      query: ({ id }) => ({
        url: `/oldBooks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["oldBooks"],
    }),
  }),
});

export const {
  useCreateOldBookMutation,
  useGetAllMyOldBooksQuery,
  useGetAllOldBooksQuery,
  useGetAllFilterableOldBooksQuery,
  useGetSingleOldBookQuery,
  useUpdateOldBookMutation,
  useDeleteOldBookMutation,
} = oldBookApi;
