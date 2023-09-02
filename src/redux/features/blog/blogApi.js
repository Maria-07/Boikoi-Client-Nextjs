import { api } from "@/redux/api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* post a blog
    postBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["blogs"],
    }),

    //* Get all Blogs :
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
        providesTags: ["blogs"],
      }),
    }),

    //* Get all My Books :
    getAllMyBlogs: builder.query({
      query: ({ mail }) => ({
        url: `/blogs?searchTerm=${mail}`,
        method: "GET",
        providesTags: ["blogs"],
      }),
    }),

    //* Update a Blog
    updateBlog: builder.mutation({
      query: ({ id, blogData }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: blogData,
      }),
      invalidatesTags: ["blogs"],
    }),

    //* Delete a Blog
    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),

    //* post a blog comment
    postBlogComment: builder.mutation({
      query: ({ id, comments }) => ({
        url: `/blogs/${id}/comments`,
        method: "POST",
        body: comments,
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  usePostBlogMutation,
  useGetBlogsQuery,
  useGetAllMyBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  usePostBlogCommentMutation,
} = blogApi;
