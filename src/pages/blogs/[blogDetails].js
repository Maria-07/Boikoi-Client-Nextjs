import RootLayout from "@/component/Layouts/RootLayout";
import AddComments from "@/component/UI/Blogs/AddComments";
import BlogSidePart from "@/component/UI/Blogs/BlogSidePart";
import { Breadcrumb, Divider, Image } from "antd";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";

const BlogDetails = ({ singleData }) => {
  // console.log("singleData", singleData);
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
            <BlogSidePart></BlogSidePart>
          </div>
          <div className="sm:col-span-3">
            <div className="border px-8 py-16">
              <h1 className="text-4xl text-dark text-center font-semibold font-primary">
                International activities of the Frankfurt Book
              </h1>
              <div className="text-accent font-normal text-sm flex items-center gap-1 justify-center my-4">
                <BiSolidUserCircle className="text-lg" /> Posted By:{" "}
                <span className="font-semibold">Susan Demo Admin</span> |
                <BsCalendarDate className="text-lg" /> Posted On:
                <span className="font-semibold">Jan 25, 2022</span>
              </div>
              <div className="my-8">
                {" "}
                <Image
                  src="https://susan-demo.myshopify.com/cdn/shop/articles/lit_fest_odesa.jpg?v=1567855487"
                  width={"auto"}
                  height={"auto"}
                  alt="Picture of the author"
                ></Image>
              </div>
              <div className="text-sm font-medium text-accent">
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
            <AddComments></AddComments>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/v1/blogs");
  const blogs = await res.json();

  // console.log(blogs);

  const paths = blogs?.data?.map((blog) => ({
    params: { blogDetails: blog.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/v1/blogs/${params.blogDetails}`
  );
  const data = await res.json();

  // console.log(data);

  // Pass post data to the page via props
  return { props: { singleData: data } };
}
