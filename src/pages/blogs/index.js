import RootLayout from "@/component/Layouts/RootLayout";
import BlogCard from "@/component/UI/Blogs/BlogCard";
import BlogSidePart from "@/component/UI/Blogs/BlogSidePart";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import { Breadcrumb, Divider } from "antd";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { useEffect } from "react";

const BlogPage = () => {
  const currentRoute = usePathname();

  //! get all blogs
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetBlogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("All Blogs:", blogs?.data);
    }
  }, [blogs, isLoading, isError]);

  return (
    <div>
      {" "}
      <div className="bg-popover py-24">
        <h1 className="text-center text-secondary font-semibold text-xl">
          News
        </h1>
      </div>
      <div className="lg:w-[80%] lg:mx-auto py-4 px-4">
        <div className="my-5">
          {" "}
          <Breadcrumb
            items={[
              {
                href: "/",
                title: (
                  <AiOutlineHome className="hover:text-primary font-semibold text-lg mt-[2px]" />
                ),
              },
              {
                title: (
                  <button
                    className={
                      currentRoute === "/blogs"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold"
                    }
                  >
                    <GiNewspaper className="  text-lg" />
                    <span>Blogs</span>
                  </button>
                ),
              },
            ]}
          />
        </div>
        <Divider></Divider>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-10 ">
          <div className="sm:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
              {blogs?.data?.map((blog, i) => (
                <BlogCard blog={blog} key={i}></BlogCard>
              ))}
            </div>
          </div>
          <div>
            <BlogSidePart blogs={blogs}></BlogSidePart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

BlogPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};