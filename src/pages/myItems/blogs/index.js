import MyItemsLayout from "@/component/Layouts/MyItemsLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import BlogCard from "@/component/UI/Blogs/BlogCard";
import PostBlogModel from "@/component/UI/Blogs/PostBlogModel";
import Loader from "@/component/UI/Loader/Loader";
import UserInfo from "@/hook/UserInfo";
import { useGetAllMyBlogsQuery } from "@/redux/features/blog/blogApi";
import { Divider } from "antd";
import { useEffect, useState } from "react";

const MyBlogs = () => {
  const [addBlog, setAddBlog] = useState(false);
  const handleAddBlog = () => {
    setAddBlog(!addBlog);
  };
  //! User data
  const user = UserInfo();

  const mail = user?.email;

  //! get all My Books
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetAllMyBlogsQuery(
    { mail },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000,
    }
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      // console.log("books mine:", books);
    }
  }, [isLoading, isError, blogs]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      {" "}
      <div>
        <div className="flex items-end justify-between  mt-3 ">
          <h1 className="text-base text-gray-600 font-semibold border-gray-200 ">
            My Blogs
          </h1>
          <button
            onClick={handleAddBlog}
            className="bk-input-button w-[120px] "
          >
            Write a blog
          </button>
        </div>
        <Divider className="mb-12 "></Divider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
          {blogs?.data?.map((blog, i) => (
            <BlogCard blog={blog} key={i}></BlogCard>
          ))}
        </div>
        {addBlog && (
          <PostBlogModel
            handleClose={handleAddBlog}
            clicked={addBlog}
          ></PostBlogModel>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;

MyBlogs.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <MyItemsLayout>{page}</MyItemsLayout>
    </RootLayout>
  );
};
