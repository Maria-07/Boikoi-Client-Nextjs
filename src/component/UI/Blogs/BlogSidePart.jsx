import { Divider } from "antd";
import Link from "next/link";
import RecentBlog from "./RecentBlog";
import { useState, useEffect } from "react";
import PostBlogModel from "./PostBlogModel";
import { getAccessToken } from "@/redux/api/apiSlice";

const BlogSidePart = () => {
  const [addBlog, setAddBlog] = useState(false);
  const handleAddBlog = () => {
    setAddBlog(!addBlog);
  };

  //! Check out if user login
  const [accessToken, setAccessToken] = useState("");
  const token = getAccessToken();
  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  return (
    <div className="">
      <div>
        <input type="text" className="border text-sm py-1 px-2  " />
        <button className="border text-sm px-3.5 py-1 bg-primary text-white">
          Search
        </button>
      </div>
      <Divider></Divider>
      {accessToken ? (
        <>
          <div className="mb-5 flex items-center gap-5 flex-wrap">
            <button
              onClick={handleAddBlog}
              className="bk-input-button w-[120px] "
            >
              Write a blog
            </button>
            <Link href={"/myItems/blogs"}>
              <button
                // onClick={handleUpdateBook}
                className="bk-input-button w-[120px]"
              >
                My Blogs
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-base font-semibold">
          Please{" "}
          <Link className="hover:text-secondary text-primary" href={"/login"}>
            Login
          </Link>{" "}
          to write a blog !!!
        </div>
      )}
      <div>
        <h1 className="text-lg font-semibold my-5 text">Important Links</h1>
        <div>
          <Link
            className="text-base text-accent hover:text-primary"
            href={"https://www.dhakaeducationboard.gov.bd/"}
          >
            <div className="my-3">Dhaka Education Board</div>
          </Link>
          <Link
            className="text-base text-accent hover:text-primary py-5"
            href={"http://www.educationboardresults.gov.bd/"}
          >
            <div className="my-3">Education Board Result</div>
          </Link>
          <Link
            className="text-base text-accent hover:text-primary py-5"
            href={"http://www.ugc-universities.gov.bd/"}
          >
            <div className="my-3">
              University Grants Commission of Bangladesh
            </div>
          </Link>
          <Link
            className="text-base text-accent hover:text-primary py-5"
            href={"https://www.nu.ac.bd/"}
          >
            <div className="my-3">
              University Grants Commission of Bangladesh
            </div>
          </Link>
        </div>
      </div>
      <Divider></Divider>
      <div>
        <h1 className="text-lg font-semibold my-5 text">Recent Posts</h1>
        <RecentBlog></RecentBlog>
        <RecentBlog></RecentBlog>
        <RecentBlog></RecentBlog>
      </div>
      <Divider></Divider>
      <div>
        <button className="px-3 py-1  border text-sm">Book</button>
        <button className="px-3 py-1  border text-sm ml-3">Shop</button>
      </div>
      {addBlog && (
        <PostBlogModel
          handleClose={handleAddBlog}
          clicked={addBlog}
        ></PostBlogModel>
      )}
    </div>
  );
};

export default BlogSidePart;
