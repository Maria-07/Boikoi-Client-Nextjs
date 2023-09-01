import RootLayout from "@/component/Layouts/RootLayout";
import AddComments from "@/component/UI/Blogs/AddComments";
import BlogSidePart from "@/component/UI/Blogs/BlogSidePart";
import { Breadcrumb, Divider, Image } from "antd";
import { usePathname } from "next/navigation";
import { AiOutlineDelete, AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from "react";
import BlogEditModal from "@/component/UI/Blogs/BlogEditModal";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import BlogDeleteModal from "@/component/UI/Blogs/BlogDeleteModal";
import { format } from "date-fns";
import UserInfo from "@/hook/UserInfo";
import BlogImageUpdateModal from "@/component/UI/ImageUpdate/BlogImageUpdateModal";

const BlogDetails = ({ singleData }) => {
  //* console.log("singleData", singleData);
  const { id, email, blog_part, title, createdAt, user_name, img } = singleData;

  //! Edit image :
  const [editImage, setEditImage] = useState(false);
  const handleEditImageModel = () => {
    setEditImage(!editImage);
  };

  //! User data
  const user = UserInfo();

  //! Edit Blog
  const [editBlog, setEditBlog] = useState(false);
  const handleEditBlog = () => {
    setEditBlog(!editBlog);
  };

  //! Delete blog
  const [deleteBlog, setDeleteBlog] = useState(false);
  const handleDeleteBlog = () => {
    setDeleteBlog(!deleteBlog);
  };

  //! Get all Blogs
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetBlogsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 100,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      //* console.log("All Blogs:", blogs?.data);
    }
  }, [blogs, isLoading, isError]);

  const currentRoute = usePathname();
  return (
    <div>
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
                href: "/blogs",
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
              {
                title: (
                  <button
                    className={
                      currentRoute === "/blogs/123"
                        ? "text-primary flex items-center gap-2 hover:text-primary font-semibold"
                        : "flex items-center gap-2 hover:text-primary font-semibold text-primary"
                    }
                  >
                    <GiNewspaper className=" text-lg" />
                    <span>blog title</span>
                  </button>
                ),
              },
            ]}
          />
        </div>
        <Divider></Divider>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 ">
          <div>
            <BlogSidePart blogs={blogs}></BlogSidePart>
          </div>
          <div className="sm:col-span-3">
            <div className="border px-8 pb-16 pt-5">
              {email === user?.email && (
                <div className="pb-5 flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <FiEdit
                      onClick={handleEditBlog}
                      className="text-lg hover:text-primary"
                      title="Edit-blog"
                    />
                    <AiOutlineDelete
                      onClick={handleDeleteBlog}
                      className="text-xl hover:text-rose-600"
                      title="Delete-blog"
                    />
                  </div>
                </div>
              )}
              <h1 className="text-4xl text-dark text-center font-semibold font-primary">
                {title}
              </h1>
              <div className="text-accent font-normal text-sm flex flex-wrap items-center gap-2 justify-center my-4">
                <div className="flex items-center gap-1">
                  <BiSolidUserCircle className="text-lg" /> Posted By :{" "}
                  <span className="font-semibold">{user_name}</span>{" "}
                </div>
                |
                <div className="flex items-center gap-1">
                  <BsCalendarDate className="text-lg" />
                  Posted On :
                  <span className="font-semibold">
                    {(() => {
                      try {
                        const createdAtDate = new Date(createdAt);
                        return format(createdAtDate, "MMM dd, yyyy");
                      } catch (error) {
                        return "Posted Time Not Found";
                      }
                    })()}
                  </span>
                </div>
              </div>
              <div className=" lg:mx-auto flex justify-end">
                <button
                  onClick={handleEditImageModel}
                  className="text-xs px-2 py-1 rounded-sm hover:bg-primary hover:text-white bg-gray-100 border"
                >
                  Edit Image
                </button>
              </div>
              <div className="mb-8 mt-4 h-[500px] overflow-hidden">
                {" "}
                <Image
                  src={img}
                  width={"100%"}
                  // height={"100%"}
                  alt="Picture of the author"
                ></Image>
              </div>
              <div className="text-sm font-medium text-accent">
                {blog_part} <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                ipsum deleniti repellendus nam deserunt vitae ullam amet quos!
                Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, vitae numquam! Vitae alias
                ullam voluptatibus asperiores fugit ea soluta consectetur
                adipisci enim, impedit odit quisquam, ut, numquam voluptatem
                quas cum! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quod, vitae numquam! Vitae alias ullam voluptatibus
                asperiores fugit <br /> <br /> ea soluta consectetur adipisci
                enim, impedit odit quisquam, u Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sed, ipsum deleniti repellendus
                nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum
                dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores
                fugit ea soluta consectetur adipisci enim, impedit odit
                quisquam, ut, numquam voluptatem quas cum! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sed, <br /> <br /> ipsum
                deleniti repellendus nam deserunt vitae ullam amet quos!
                Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, vitae numquam! Vitae alias
                ullam voluptatibus asperiores fugit ea soluta consectetur
                adipisci enim, impedit odit quisquam, ut, numquam voluptatem
                quas cum! repellendus nam deserunt vitae ullam amet quos!
                Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, vitae numquam! Vitae alias
                ullam voluptatibus asperiores fugit ea soluta consectetur
                adipisci enim, impedit odit quisquam, ut, numquam voluptatem
                quas cum!
              </div>
              <Divider></Divider>
              <div className="text-xs text-accent"> Tags : Book, Shop</div>
              <Divider></Divider>
              <div className="flex items-center gap-5 my-4">
                <FaFacebookF className="text-4xl p-2 border hover:bg-blue-700 hover:text-white" />
                <FaInstagram className="text-4xl p-2 border hover:bg-rose-700 hover:text-white" />
                <FaTwitch className="text-4xl p-2 border hover:bg-purple-700 hover:text-white" />
                <FaTwitter className="text-4xl p-2 border hover:bg-sky-700 hover:text-white" />
              </div>
            </div>
            <AddComments singleData={singleData}></AddComments>
          </div>
        </div>
      </div>
      {editImage && (
        <BlogImageUpdateModal
          id={id}
          handleClose={handleEditImageModel}
          clicked={editImage}
        ></BlogImageUpdateModal>
      )}
      {editBlog && (
        <BlogEditModal
          singleData={singleData}
          id={id}
          handleClose={handleEditBlog}
          clicked={editBlog}
        ></BlogEditModal>
      )}
      {deleteBlog && (
        <BlogDeleteModal
          title={title}
          id={id}
          handleClose={handleDeleteBlog}
          clicked={deleteBlog}
        ></BlogDeleteModal>
      )}
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
  const blogs = await res.json();

  const paths = blogs?.data?.map((blog) => ({
    params: { blogDetails: blog.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${params.blogDetails}`
  );
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { singleData: data?.data } };
}
