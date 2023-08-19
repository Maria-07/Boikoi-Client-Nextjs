import { Card, Image } from "antd";

const RecentBlog = () => {
  return (
    <div className="my-4">
      <Card hoverable>
        <div className="flex items-center">
          <Image
            src="https://p4.wallpaperbetter.com/wallpaper/830/169/217/book-books-culture-flowers-wallpaper-preview.jpg"
            width={180}
            height={"auto"}
            alt="Picture of the author"
          ></Image>
          <div className="p-2">
            <div className="text-xs  text-black  hover:text-primary">
              The London Book Fair is to be packed with exciting
            </div>
            <h2 className="text-xs text-accent mt-1">Jan 25, 2022</h2>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecentBlog;
