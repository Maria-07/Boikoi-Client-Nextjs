import { Divider } from "antd";
import Link from "next/link";
import RecentBlog from "./RecentBlog";
import { useState } from "react";
import PostBlogModel from "./PostBlogModel";

const BlogSidePart = () => {
  const [addBlog, setAddBlog] = useState(false);
  const handleAddBlog = () => {
    setAddBlog(!addBlog);
  };
  return (
    <div className="">
      <div>
        <input type="text" className="border text-sm py-1 px-2  " />
        <button className="border text-sm px-3.5 py-1 bg-primary text-white">
          Search
        </button>
      </div>
      <Divider></Divider>
      <div className="mb-5">
        <button
          onClick={handleAddBlog}
          className="bk-input-button w-[120px] mr-3"
        >
          Share a blog
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
