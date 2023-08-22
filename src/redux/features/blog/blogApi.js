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
  }),
});

export const { usePostBlogMutation, useGetBlogsQuery } = blogApi;
