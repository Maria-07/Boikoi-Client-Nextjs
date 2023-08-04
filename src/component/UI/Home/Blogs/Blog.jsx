import { Image } from "antd";

const Blog = () => {
  return (
    <div className="py-10">
      <div>
        <Image
          src="https://susan-demo.myshopify.com/cdn/shop/articles/9_740x470_crop_center.jpg?v=1567855381"
          width={"auto"}
          height={"auto"}
          alt="Picture of the author"
        ></Image>
        <div className="px-5 py-3 rounded-[100%] absolute top-16 left-5 bg-white text-dark text-center text-base">
          20 <br />
          <span className="font-semibold">May</span>
        </div>
      </div>
      <div>
        <div className="text-base my-5 text-black font-semibold hover:text-primary">
          The London Book Fair is to be packed with exciting
        </div>
        <h2 className="text-sm text-accent ">Posted By: Susan Demo Admin</h2>
        <p className="text-[15px]  my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum
          deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt,
          quo. Lorem, ipsum dolor.
        </p>
        <button className="text-sm hover:text-secondary text-accent ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
