import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";

const Category = ({ category }) => {
  return (
    <div className="mx-auto">
      <Link href={"/books"}>
        <div className="border-[0.2px] border-gray-300 rounded-md ">
          <Card hoverable style={{ width: 230, height: 300 }}>
            <div className="p-5">
              <Image
                src={category.img}
                width={"auto"}
                height={"auto"}
                alt="Picture of the author"
                className="h-[206px] "
              />
              <h1 className="text-lg text-dark my-3 text-center font-primary font-medium ">
                {category.name}
              </h1>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default Category;
