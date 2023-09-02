import { Image } from "antd";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  // console.log("single blog", blog);
  const { blog_part, title, createdAt, user_name, id, img } = blog;

  return (
    <div>
      <div className="">
        <div className="h-[270px] overflow-hidden">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="Picture of the author"
          ></Image>
        </div>
        <div>
          <Link href={`/blogs/${id}`}>
            {" "}
            <div className="text-base my-5 text-black font-semibold hover:text-primary">
              {title}
            </div>
          </Link>

          <h2 className="text-sm text-dark ">
            {(() => {
              try {
                const createdAtDate = new Date(createdAt);
                return format(createdAtDate, "MMM dd, yyyy");
              } catch (error) {
                return "Posted Time Not Found";
              }
            })()}
            | <span className="text-accent">{user_name}</span>
          </h2>

          <p className="text-[15px] h-[60px] my-5">
            {blog_part.length > 80
              ? `${blog_part.slice(0, 80)} ...`
              : blog_part}
          </p>
          <Link href={`/blogs/${id}`}>
            <button className="text-sm hover:text-secondary text-accent border-b-2 hover:border-secondary">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
