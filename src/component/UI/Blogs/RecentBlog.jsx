import { Card, Image } from "antd";
import Link from "next/link";

const RecentBlog = ({ blog }) => {
  const { title, id } = blog;
  return (
    <div className="my-4">
      <Link href={`/blogs/${id}`}>
        <Card hoverable>
          <div className="grid grid-cols-3 ">
            <div className="">
              <Image
                src="https://p4.wallpaperbetter.com/wallpaper/830/169/217/book-books-culture-flowers-wallpaper-preview.jpg"
                width={"100%"}
                height={"100%"}
                alt="Picture of the author"
              ></Image>
            </div>

            <div className="p-2 col-span-2">
              <div className="text-xs  text-black  hover:text-primary">
                {title}
              </div>
              <h2 className="text-xs text-accent mt-1">Jan 25, 2022</h2>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default RecentBlog;
