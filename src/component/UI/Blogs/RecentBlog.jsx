import { Card, Image } from "antd";
import { format } from "date-fns";
import Link from "next/link";

const RecentBlog = ({ blog }) => {
  const { title, id, img, createdAt } = blog;
  return (
    <div className="my-4">
      <Link href={`/blogs/${id}`}>
        <Card hoverable>
          <div className="grid grid-cols-3 ">
            <div className="">
              <Image
                src={img}
                width={"100%"}
                height={"100%"}
                alt="Picture of the author"
              ></Image>
            </div>

            <div className="p-2 col-span-2">
              <div className="text-xs  text-black  hover:text-primary">
                {title.length > 50 ? `${title.slice(0, 50)} ...` : title}
              </div>
              <h2 className="text-xs text-accent mt-1">
                {(() => {
                  try {
                    const createdAtDate = new Date(createdAt);
                    return format(createdAtDate, "MMM dd, yyyy");
                  } catch (error) {
                    return "Posted Time Not Found";
                  }
                })()}
              </h2>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default RecentBlog;
