import { Image } from "antd";
import { format } from "date-fns";
import Link from "next/link";

const Blog = ({ blog }) => {
  const { blog_part, title, createdAt, user_name, id, img } = blog;
  return (
    <div className="py-10">
      <div>
        <div className="h-[270px]">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="Picture of the author"
          ></Image>
        </div>
        <div className="px-5 py-3 rounded-[100%] absolute top-16 left-5 bg-white text-dark text-center text-base">
          {(() => {
            try {
              const createdAtDate = new Date(createdAt);
              return format(createdAtDate, "dd");
            } catch (error) {
              return "Posted Time Not Found";
            }
          })()}
          <br />
          <span className="font-semibold">
            {(() => {
              try {
                const createdAtDate = new Date(createdAt);
                return format(createdAtDate, "MMM");
              } catch (error) {
                return "Posted Time Not Found";
              }
            })()}
          </span>
        </div>
      </div>
      <div>
        <Link href={`/blogs/${id}`}>
          <button className="text-base my-5 text-black font-semibold hover:text-primary">
            {title}
          </button>
        </Link>

        <h2 className="text-sm text-accent ">Posted By: {user_name}</h2>
        <p className="text-[15px] h-[80px] my-5">
          {blog_part.length > 180
            ? `${blog_part.slice(0, 180)} ...`
            : blog_part}
        </p>
        <Link href={`/blogs/${id}`}>
          <button className="text-sm hover:text-secondary text-accent ">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
