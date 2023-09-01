import { Image } from "antd";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  // console.log("single blog", blog);
  const { blog_part, title, createdAt, user_name, id, img } = blog;

  return (
    <div>
      <div className="">
        <div className="h-[270px]">
          <Image
            src={img}
            width={"100%"}
            height={"100%"}
            alt="Picture of the author"
          ></Image>
        </div>
        <div>
          <div className="text-base my-5 text-black font-semibold hover:text-primary">
            {title}
          </div>
          <h2 className="text-sm text-dark ">
            {(() => {
              try {
                const createdAtDate = new Date(createdAt);
                return format(createdAtDate, "MMM dd, yyyy");
              } catch (error) {
                return "Posted Time Not Found";
              }
            })()}{" "}
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

//  <div>
//    <div className="">
//      <div>
//        <Image
//          src="https://susan-demo.myshopify.com/cdn/shop/articles/9_740x470_crop_center.jpg?v=1567855381"
//          width={"auto"}
//          height={"auto"}
//          alt="Picture of the author"
//        ></Image>
//      </div>
//      <div>
//        <div className="text-base my-5 text-black font-semibold hover:text-primary">
//          The London Book Fair is to be packed with exciting
//        </div>
//        <h2 className="text-sm text-dark ">
//          Jan 25, 2022 | <span className="text-accent">Boikoi Demo Admin</span>
//        </h2>
//        <p className="text-[15px]  my-5">
//          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum
//          deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo.
//          Lorem, ipsum dolor.
//        </p>
//        <Link href={"/blogs/1234"}>
//          {" "}
//          <button className="text-sm hover:text-secondary text-accent border-b-2 hover:border-secondary">
//            Read More
//          </button>
//        </Link>
//      </div>
//    </div>
//  </div>;
